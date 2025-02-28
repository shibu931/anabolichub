'use client'
import Breadcrumbs from '@/components/Common/Breadcrumbs'
import ArticleCard from '@/components/Common/ArticleCard'
import { useState, useEffect } from 'react';

async function getArticles(page = 1, limit = 10) { // Added page and limit parameters
  const data = await fetch(`/api/article/get-all-articles?type=blog&page=${page}&limit=${limit}`);
  return data.json();
}

const page = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const limit = 10; // Number of articles per page

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true); // Set loading to true before fetching
      const { articles: fetchedArticles, totalPages: fetchedTotalPages } = await getArticles(page, limit);
      setArticles(fetchedArticles);
      setTotalPages(fetchedTotalPages);
      setLoading(false); // Set loading to false after fetching
    }

    fetchArticles();
  }, [page, limit]); // Added page and limit to the dependency array


  if (loading) {
    return <div className="container xl:w-[1280px] mx-auto mt-4">Loading...</div>; // Display a loading message while fetching
  }

  if (!articles || articles.length === 0) {
    return <div className="container xl:w-[1280px] mx-auto mt-4">No articles found.</div>; // Handle the case where no articles are found
  }


  return (
    <div className='container xl:w-[1280px] mx-auto mt-4'>
      <Breadcrumbs />
      <div className="flex flex-wrap -mx-4 mt-5">
        {articles.map((article) => (
          <ArticleCard  article={article} key={article.title} /> // Use a more stable key like article._id if available
        ))}
      </div>

      <div className='w-full'>
        {totalPages > 1 && ( // Only show pagination if there's more than one page
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
    </div>
  );
}

export default page;