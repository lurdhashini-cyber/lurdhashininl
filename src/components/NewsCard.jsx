import { useState } from 'react';
import { HiOutlineBookmark, HiBookmark, HiShare } from 'react-icons/hi';

export default function NewsCard({ article }) {
  const [saved, setSaved] = useState(false);
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {article.urlToImage && (
        <img 
          src={article.urlToImage} 
          alt={article.title} 
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {article.source?.name}
          </span>
          <div className="flex space-x-2">
            <button 
              onClick={() => setSaved(!saved)}
              className="text-gray-400 hover:text-yellow-500"
            >
              {saved ? <HiBookmark className="h-5 w-5 text-yellow-500" /> : <HiOutlineBookmark className="h-5 w-5" />}
            </button>
            <button className="text-gray-400 hover:text-blue-500">
              <HiShare className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <h3 className="mt-2 font-bold text-lg line-clamp-2">{article.title}</h3>
        <p className="mt-2 text-gray-600 text-sm line-clamp-3">{article.description}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs text-gray-500">
            {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : ''}
          </span>
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
