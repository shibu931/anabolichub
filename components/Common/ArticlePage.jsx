'use client'; 
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify'; 

const ArticlePage = ({ content }) => {
  const [sanitizedHTML, setSanitizedHTML] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // const cleanHTML = DOMPurify.sanitize(content);
      setSanitizedHTML(content);
    }
  }, [content]);

  useEffect(()=>{
    const headings = document.querySelectorAll('h2, h3, h4, h5');
    headings.forEach(heading => {
      const id = heading.id || heading.textContent.toLowerCase().replace(/\s+/g, '-');
      heading.id = id;
    });
  },[sanitizedHTML])

  return <div className='article' dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export default ArticlePage;
