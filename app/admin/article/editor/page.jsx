'use client';
import { useState, useEffect} from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Editor from '@/components/Common/Editor';
import { handleImageUpload } from '@/lib/utils';

const ContentEditor = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const isNew = !id;

    useEffect(() => {
        const fetchContent = async () => {
            if (isNew) return;

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

    async function handleImageChange(e){
        const link = await handleImageUpload((e.target).files?.[0]);
        setContentData({...contentData,ogImage:link})
    }

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

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    if (error) return <div className="text-red-500 text-center my-10">Error: {error}</div>;

    return (
        <div className="container mx-auto p-10 bg-base-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-center">{isNew ? 'New Article' : `Edit ${contentData?.title}`}</h1>

            <div className="mb-6">
                <input
                    type="text"
                    className="rounded-none input input-bordered w-full"
                    value={contentData?.title}
                    onChange={(e) => setContentData({ ...contentData, title: e.target.value })}
                    placeholder="Title"
                />
            </div>

            <div className="mb-6">
                <Editor data={contentData} setData={setContentData} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <input
                        type="text"
                        className="rounded-none input input-bordered w-full mb-4"
                        value={contentData?.metaTitle}
                        onChange={(e) => setContentData({ ...contentData, metaTitle: e.target.value })}
                        placeholder="Meta Title"
                    />
                    <textarea
                        className="textarea textarea-bordered w-full h-32 mb-4"
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
                        type="file"
                        className="rounded-none input input-bordered w-full mb-4"
                        onChange={(e)=>{handleImageChange(e)}}
                    />
                    {contentData?.ogImage && (
                        <div className="mt-2">
                            <Image src={contentData?.ogImage} width={200} height={100} alt={contentData?.title} className="rounded" />
                        </div>
                    )}
                </div>
                <div>
                    <input
                        type="text"
                        className="
                        file:mr-4
                        file:py-2
                        file:px-4
                        file:rounded-md
                        file:border-0
                        file:text-sm
                        file:font-semibold
                        file:bg-blue-50
                        file:text-blue-700
                        hover:file:bg-blue-100
                    
                        rounded-none 
                        input 
                        input-bordered 
                        w-full 
                        mb-4
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                      "
                        value={contentData?.slug}
                        onChange={(e) => setContentData({ ...contentData, slug: e.target.value })}
                        placeholder="Slug"
                    />
                </div>
            </div>

            <div className="mt-6 flex justify-end gap-4">
                {!isNew && <button className="btn btn-error rounded-none" onClick={handleDelete}>Delete</button>}
                <button className="btn btn-primary rounded-none" onClick={handleSave}>{isNew ? 'Create' : 'Save'}</button>
            </div>
        </div>
    );
};

export default ContentEditor;