'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import FileInput from '@/components/Common/FileInput';
import Editor from '@/components/Common/Editor';
import { handleImageUpload } from '@/lib/utils';
import Loading from '@/components/Common/Loading';

const product = {
    productId: '',
    productName: '',
    productImage: [{ thumb: '', large: '' }],
    shortDescription: '',
    productPrice: '',
    productPricePerMg: '',
    brandName: '',
    brandLink: '',
    category: { href: '', title: '' },
    subCategory: [{ href: '', title: '' }],
    slug: '',
    info: '',
    description: '',
    sales: 0,
}

const page = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const slug = searchParams.get('slug');
    const [productData, setProductData] = useState(product);
    const [error, setError] = useState()
    const isNew = !slug;

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('productImage')) {
            const index = parseInt(name.split('[')[1].split(']')[0]);
            const key = name.split('.')[1];
            setProductData(prev => {
                const newImages = [...prev.productImage];
                newImages[index] = { ...newImages[index], [key]: value };
                return { ...prev, productImage: newImages }
            })
        } else if (name.startsWith('subCategory')) {
            const index = parseInt(name.split('[')[1].split(']')[0]);
            const key = name.split('.')[1];
            setProductData(prev => {
                const newSubCats = [...prev.subCategory];
                newSubCats[index] = { ...newSubCats[index], [key]: value };
                return { ...prev, subCategory: newSubCats }
            })
        } else if (name.startsWith('category')) {
            setProductData(prev => ({
                ...prev,
                category: {
                    ...prev.category,
                    [name.split('.')[1]]: value,
                },
            }));
        } else {
            setProductData({ ...productData, [name]: value });
        }
    };

    const handleImageChange = async (index, type, imageFile) => {
        if (!imageFile) return;
        try {
            const uploadedImageUrl = await handleImageUpload(imageFile); // Your upload function
            setProductData(prevData => {
                const newImages = [...prevData.productImage];
                newImages[index] = { ...newImages[index], [type]: uploadedImageUrl };
                return { ...prevData, productImage: newImages };
            });
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleLinkChange = (index, type, link) => {
        setProductData(prevData => {
            const newImages = [...prevData.productImage];
            newImages[index] = { ...newImages[index], [type]: link };
            return { ...prevData, productImage: newImages };
        });
    };

    const handleAddImage = () => {
        setProductData(prev => ({ ...prev, productImage: [...prev.productImage, { thumb: '', large: '' }] }))
    }

    const handleAddSubCategory = () => {
        setProductData(prev => ({ ...prev, subCategory: [...prev.subCategory, { href: '', title: '' }] }))
    }

    const handleRemoveImage = (index) => {
        setProductData(prev => ({
            ...prev,
            productImage: prev.productImage.filter((_, i) => i !== index),
        }));
    };

    const handleRemoveSubCategory = (index) => {
        setProductData(prev => ({
            ...prev,
            subCategory: prev.subCategory.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        try {
            const method = isNew ? 'POST' : 'PUT';
            const url = isNew ? '/api/products' : `/api/products?slug=${slug}`;

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || `HTTP error! status: ${res.status}`);
            }

            alert(`Product ${isNew ? 'created' : 'saved'}!`);
            router.push('/admin/products');
        } catch (err) {
            console.error("Error saving Product: ", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchProduct = async () => {
            if (isNew) return;

            setLoading(true);
            try {
                const res = await fetch(`/api/products/${slug}`);
                if (!res.ok) {
                    const errorData = await res.json();
                    throw new Error(errorData.error || `HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setProductData(data.product);
            } catch (err) {
                console.error("Error fetching content:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [slug, isNew]);

    useEffect(() => {
        console.log(productData);
    }, [productData])

    if (loading) return <p className='text-center'><Loading util={'text-primary'} /></p>
    if (error) return <div className="text-red-500 text-center my-10">Error: {error}</div>;

    return (

        <form onSubmit={handleSubmit} className="mx-auto p-6 bg-white rounded-md shadow-md">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="col-span-1">
                    <label htmlFor="productId" className="block text-gray-700 font-bold mb-2">Product ID</label>
                    <input type="number" id="productId" name="productId" value={productData.productId} onChange={handleChange} placeholder="Product ID" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="col-span-1">
                    <label htmlFor="productName" className="block text-gray-700 font-bold mb-2">Product Name</label>
                    <input type="text" id="productName" name="productName" value={productData.productName} onChange={handleChange} placeholder="Product Name" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="col-span-1">
                    <label htmlFor="productName" className="block text-gray-700 font-bold mb-2">Product Price</label>
                    <input type="text" name="productPrice" value={productData.productPrice} onChange={handleChange} placeholder="Product Price" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className={`col-span-${productData.productImage.length < 2 ? productData.productImage.length : 3}`}>
                    <div className={`grid gap-4 grid-cols-${productData.productImage.length < 2 ? productData.productImage.length : 3}`}>
                        {productData.productImage.map((image, index) => (
                            <div key={index} className="mb-4 border p-4 rounded col-span-1 relative">
                                <h3 className="text-lg font-medium mb-2">Image {index + 1}</h3>
                                <div className="mb-2">
                                    <label htmlFor={`productImage[${index}].thumb`} className="block text-gray-700 font-bold mb-2">Thumb URL</label>
                                    <FileInput
                                        name={`productImage[${index}].thumb`}
                                        handleImageChange={(e) => handleImageChange(index, "thumb", e.target.files?.[0])}
                                        handleLinkChange={(link) => handleLinkChange(index, "thumb", link)}
                                        initialValue={image.thumb}
                                    />
                                </div>
                                <div>
                                    <label htmlFor={`productImage[${index}].large`} className="block text-gray-700 font-bold mb-2">Large URL</label>
                                    <FileInput
                                        name={`productImage[${index}].large`}
                                        handleImageChange={(e) => handleImageChange(index, "large", e.target.files?.[0])}
                                        handleLinkChange={(link) => handleLinkChange(index, "large", link)}
                                        initialValue={image.large}
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(index)}
                                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <button type="button" onClick={handleAddImage} className="btn btn-secondary btn-sm font-bold py-2 px-4 rounded mb-4">Add Image</button>
                </div>
                <div className="col-span-1">
                    <div className="border p-4 rounded">
                        <label htmlFor="brandName" className="block text-gray-700 font-bold mb-2">Brand Name</label>
                        <input type="text" id="brandName" name="brandName" value={productData.brandName} onChange={handleChange} placeholder="Brand Name" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" />
                        <input type="text" id="brandLink" name="brandLink" value={productData.brandLink} onChange={handleChange} placeholder="Brand slug" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="border p-4 rounded">
                        <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category</label>
                        <input type="text" name="category.title" value={productData.category.title} onChange={handleChange} placeholder="Category Title" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" />
                        <input type="text" id="category" name="category.href" value={productData.category.href} onChange={handleChange} placeholder="Category Slug" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="border p-4 rounded">
                        <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Sub Category</label>
                        {productData.subCategory.map((sub, index) => (
                            <div className='mb-3 relative' key={index}>
                                <input type="text" name={`subCategory[${index}].href`} value={sub.href} onChange={handleChange} placeholder={`SubCategory ${index + 1} href`} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" />
                                <input type="text" name={`subCategory[${index}].title`} value={sub.title} onChange={handleChange} placeholder={`SubCategory ${index + 1} title`} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveSubCategory(index)}
                                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
                                >
                                    Remove
                                </button>
                            </div>

                        ))}
                        <button type="button" onClick={handleAddSubCategory} className="btn btn-secondary btn-sm font-bold py-2 px-4 rounded mb-4">Add Sub Category</button>
                    </div>
                </div>
                <div className="col-span-2">
                    <label htmlFor="shortDescription" className="block text-gray-700 font-bold mb-2">Short Description</label>
                    <Editor data={productData} id={'shortDescription'} setData={setProductData} contentKey='shortDescription' />
                </div>
                <div className="col-span-3">
                    <label htmlFor="Description" className="block text-gray-700 font-bold mb-2">Meta Description</label>
                    <textarea
                        className="textarea textarea-bordered w-full h-32 mb-4"
                        id='Description'
                        value={productData?.description}
                        onChange={handleChange}
                        placeholder="Meta Description"
                    />
                    {/* <Editor data={productData} id={'Description'} setData={setProductData} contentKey='description' /> */}
                </div>
                <div className="col-span-1">
                    <label htmlFor="slug" className="block text-gray-700 font-bold mb-2">Product Slug</label>
                    <input type="text" id="slug" name="slug" value={productData.slug} onChange={handleChange} placeholder="Product Slug" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                {!isNew && <button className="btn btn-error rounded-none" >Delete</button>}
                <button className="btn btn-primary rounded-none">{isNew ? 'Create' : 'Save'}</button>
            </div>
        </form>

    )
}

export default page