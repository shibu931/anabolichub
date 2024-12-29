'use client'
import React from 'react';
import Link from 'next/link';

function GenericList({ data, itemName, editPath, handleDelete }) {
    const getEditUrl = (item) => {
        let url = editPath;
        const params = new URLSearchParams();

        switch (itemName.toLowerCase()) {
            case 'article':
                params.append('articleId', item.id);
                params.append('slug', item.slug);
                break;
            case 'product':
                params.append('slug', item.slug);
                break;
            case 'order':
                params.append('orderId', `${item.orderId}` || item.id); // Use orderId if available, otherwise fallback to id
                params.append('isNew', 'false'); // Use orderId if available, otherwise fallback to id
                break;
            default:
                params.append('id', item.id); // Default to id for other item types
        }

        if (params.toString()) {
            url += `?${params.toString()}`;
        }

        return url;
    };
    return (
        <div>
            <div className="flex justify-between mb-4">
                <h2 className="text-2xl font-bold">{itemName}s</h2>
                {itemName === 'Order' ? '':<Link href={editPath} className="btn btn-primary rounded-none">
                    Add New {itemName}
                </Link>}
            </div>
            {data.length === 0 ? (
                <p>No {itemName.toLowerCase()}s found.</p>
            ) : (
                <ul className="space-y-4">
                    {data.map((item) => (
                        <li key={item.id} className="border rounded p-4 shadow-sm bg-white">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-semibold">{itemName === 'Order' && 'Order Id: '}{item.title || item.prodcutName || item.orderId}</h3>
                                    {item.slug && <p className="text-gray-600">Slug: {item.slug}</p>}
                                    {item.createdAt && <p className="text-gray-600">Ordered At: {item.createdAt}</p>}
                                </div>
                                <div className="flex gap-2">
                                    <Link
                                        href={getEditUrl(item)}
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-300"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-300"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default GenericList;