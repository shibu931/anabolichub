// app/api/address/route.js
import { NextResponse } from 'next/server';
import connectToDB from '@/utils/dbConnect';
import Address from '@/models/address';

connectToDB();
export async function GET(req) {
  try {

    const url = new URL(req.url);
    const userId = url.searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

    const address = await Address.findOne({ userId: userId });

    if (!address) {
      return NextResponse.json({ address: null, message: 'No address found for this user' }, { status: 200 }); // Return null if no address is found
    }

    return NextResponse.json({ address }, { status: 200 });
  } catch (error) {
    console.error('Error fetching address:', error);
    return NextResponse.json({ message: 'Error fetching address', address: null }, { status: 500 }); // Return null if an error occurs
  }
}