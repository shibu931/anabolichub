import path from 'path';
import fs from 'fs/promises';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const image = formData.get('image');

    if (!image) {
      return NextResponse.json({ message: 'No image file provided' }, { status: 400 });
    }

    if (!(image instanceof File)) {
      return NextResponse.json({ message: 'Invalid file provided' }, { status: 400 });
    }

    const buffer = await image.arrayBuffer();
    const bytes = new Uint8Array(buffer);

    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    const filename = `${timestamp}-${random}-${image.name}`;

    const uploadDir = path.join('/var/www/uploads');

    try {
      await fs.mkdir(uploadDir, { recursive: true });
    } catch (mkdirError) {
      console.error("Error creating directory:", mkdirError);
      return NextResponse.json({ message: 'Error creating upload directory' }, { status: 500 });
    }

    const filePath = path.join(uploadDir, filename);

    try {
      await fs.writeFile(filePath, Buffer.from(bytes));
    } catch (writeFileError) {
      console.error("Error writing file:", writeFileError);
      return NextResponse.json({ message: 'Error saving file' }, { status: 500 });
    }

    const publicPath = process.env.DOMAIN_URL ? `${process.env.DOMAIN_URL}/uploads/${filename}` : null;

    return NextResponse.json({ message: 'File uploaded successfully', url: publicPath }, { status: 200 });

  } catch (error) {
    console.error('Error processing upload:', error);
    return NextResponse.json({ message: 'Error processing file upload' }, { status: 500 });
  }
}