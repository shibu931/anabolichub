'use client';
import { useState, useEffect } from 'react';
import GenericList from '@/components/Dashboard/GenericList';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

  const fetchArticles = async () => {
    const urlParams = new URLSearchParams({
      page,
      search: debouncedSearchQuery,
    });
    try {
      setLoading(true)
      const response = await fetch(`/api/article/get-all-articles?${urlParams.toString()}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.status === 204) {
        console.log("Error: ", data.message);
        setArticles([])
        setTotalPages(0)
      } else {
        const { articles, totalPages, currentPage } = data;        
        setArticles(articles);
        setTotalPages(totalPages);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    fetchArticles();
  }, [page, debouncedSearchQuery]);

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
  return (
    <>
      <GenericList
        data={articles}
        loading={loading}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        error={error}
        itemName="Article"
        editPath="/admin/article/editor"
        handleDelete={(id) => handleDelete(id)}
      />
      <div className='w-full'>
        {totalPages && (
          <div className="join my-4 lg:my-8 flex justify-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                className={`join-item btn btn-square ${page === pageNumber ? 'btn-active' : ''}`}
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
};

export default ArticleList;