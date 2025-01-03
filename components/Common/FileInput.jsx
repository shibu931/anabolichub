'use client'
import React, { useState, useRef } from 'react';

const FileInput = ({ handleImageChange }) => {
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      handleImageChange(e); 
    } else {
      setFileName(''); 
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={handleClick}
        className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-between"
      >
        <span className="truncate">{fileName || 'Choose a file'}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L4 8m4-4v12"
          />
        </svg>
      </button>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden" // Hide the default input
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FileInput;