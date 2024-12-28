'use client'; // This is crucial!

import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify'; // Correct import for DOMPurify

const ArticlePage = ({ content }) => {
  const [sanitizedHTML, setSanitizedHTML] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cleanHTML = DOMPurify.sanitize(content);
      setSanitizedHTML(cleanHTML);
    }
  }, [content]); // Add 'content' as a dependency to ensure updates when it changes

  return <div className='article' dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export default ArticlePage;
