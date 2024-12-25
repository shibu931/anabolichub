'use client';
import { useState, useEffect, Suspense } from 'react';
import {  useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Editor from '@/components/Common/Editor'

const ContentEditor = ({ params }) => {
    const searchParams = useSearchParams();
    const id = searchParams.get('articleId'); 
    const slug = searchParams.get('slug'); 
    const [contentData, setContentData] = useState({
        title: '',
        slug: '',
        content: '',
        metaTitle: '',
        metaDescription: '',
        keywords: '',
        ogImage: '',
    });
    const [loading, setLoading] = useState(false); // Start with loading false
    const [error, setError] = useState(null);
    const isNew = !id; // Determine if it's a new article

    useEffect(() => {
        const fetchContent = async () => {
            if (isNew) return; // Don't fetch for new articles

            setLoading(true);
            try {
                const res = await fetch(`/api/article?slug=${slug}`);
                if (!res.ok) {
                    const errorData = await res.json();
                    throw new Error(errorData.error || `HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                
                setContentData(data.article);
            } catch (err) {
                console.error("Error fetching content:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [id, isNew]);

    const handleSave = async () => {
        setLoading(true);
        try {
            const method = isNew ? 'POST' : 'PUT';
            const url = isNew ? '/api/article' : `/api/article?Id=${id}`;
            
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contentData),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || `HTTP error! status: ${res.status}`);
            }

            alert(`Content ${isNew ? 'created' : 'saved'}!`);
            router.push('/admin/article');
        } catch (err) {
            console.error("Error saving content:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (isNew) {
            alert("Cannot delete a new article");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch(`/api/article?Id=${id}`, { method: 'DELETE' });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || `HTTP error! status: ${res.status}`);
            }
            alert('Content deleted!');
            router.push('/admin/article');
        } catch (err) {
            console.error("Error deleting content:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
            <div className='container mx-auto py-10'>
            <h1 className='text-3xl font-bold mb-4'>{isNew ? 'New Article' : `Edit ${contentData?.title}`}</h1>
            <input
                type="text"
                className="rounded-none input input-bordered w-full mb-4"
                value={contentData?.title}
                onChange={(e) => setContentData({ ...contentData, title: e.target.value })}
                placeholder="Title"
            />
            <Editor contentData={contentData} setContentData={setContentData} />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                <div>
                    <input
                        type="text"
                        className="rounded-none input input-bordered w-full mb-4"
                        value={contentData?.metaTitle}
                        onChange={(e) => setContentData({ ...contentData, metaTitle: e.target.value })}
                        placeholder="Meta Title"
                    />
                    <textarea
                        className="textarea textarea-bordered w-full mb-4"
                        value={contentData?.metaDescription}
                        onChange={(e) => setContentData({ ...contentData, metaDescription: e.target.value })}
                        placeholder="Meta Description"
                    />
                    <input
                        type="text"
                        className="rounded-none input input-bordered w-full mb-4"
                        value={contentData?.keywords}
                        onChange={(e) => setContentData({ ...contentData, keywords: e.target.value })}
                        placeholder="Keywords (comma separated)"
                    />
                    <input
                        type="text"
                        className="rounded-none input input-bordered w-full mb-4"
                        value={contentData?.ogImage}
                        onChange={(e) => setContentData({ ...contentData, ogImage: e.target.value })}
                        placeholder="OG Image URL"
                    />
                    {contentData?.ogImage && <Image src={contentData?.ogImage} width={200} height={100} alt={contentData?.title} />}
                </div>
                <div>
                    <input
                        type="text"
                        className="rounded-none input input-bordered w-full mb-4"
                        value={contentData?.slug}
                        onChange={(e) => setContentData({ ...contentData, slug: e.target.value })}
                        placeholder="Slug"
                    />
                </div>
            </div>

            <div className='flex justify-end gap-4'>
                {!isNew && <button className="btn btn-error rounded-none" onClick={handleDelete}>Delete</button>}
                <button className="btn btn-primary rounded-none" onClick={handleSave}>{isNew ? 'Create' : 'Save'}</button>
            </div>
        </div>
    );
};

export default ContentEditor;