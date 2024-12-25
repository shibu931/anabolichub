// components/ArticleList.js
'use client'; // Important: This is a client component

import { useState, useEffect } from 'react';

import Link from 'next/link';

const ArticleList = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('/api/article/getAllArticles'); // Replace with your API endpoint
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setArticles(data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/article?Id=${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      // Optimistically update the UI
      setArticles(articles.filter(article => article.id !== id));
      alert("Article deleted!")
    } catch (err) {
      console.error("Error deleting article:", err);
      alert("Error deleting article!")
    }
  }

  if (loading) {
    return <div>Loading articles...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Articles</h2>
        <Link href='/admin/article/editor' className="btn btn-primary rounded-none">Add New Article</Link>
      </div>
      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <ul className="space-y-4">
          {articles.map((article) => (
            <li key={article.id} className="border rounded p-4 shadow-sm bg-white">
              <div className='flex justify-between items-center'>
                <div>
                  <h3 className="text-lg font-semibold">{article.title}</h3>
                  <p className="text-gray-600">Slug: {article.slug}</p>
                </div>
                <div className='flex gap-2'>
                  <Link href={`/admin/article/editor?slug=${article.slug}&articleId=${article.id}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-300">Edit</Link>
                  <button onClick={() => handleDelete(article.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-300">Delete</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArticleList;