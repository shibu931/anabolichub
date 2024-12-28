'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import GenericList from '../../../components/Dashboard/GenericList ';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('/api/article/getAllArticles');
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
      setArticles(articles.filter(article => article.id !== id));
      alert("Article deleted!")
    } catch (err) {
      console.error("Error deleting article:", err);
      alert("Error deleting article!")
    }
  }

  if (loading) return <div>Loading articles...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <GenericList
    data={articles}
    itemName="Article"
    editPath="/admin/article/editor"
    handleDelete={(id) => handleDelete(id)}
  />
  )
};

export default ArticleList;