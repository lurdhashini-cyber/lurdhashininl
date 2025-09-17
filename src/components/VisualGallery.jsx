import { Link } from 'react-router-dom';

export default function VisualGallery({ articles }) {
  if (!articles || !articles.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {articles.map((article, index) => (
        <a 
          key={article.url || index}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative block h-64 overflow-hidden rounded-xl shadow-md ${index === 0 ? 'md:col-span-2 md:row-span-2 h-96' : 'h-64'}`}
        >
          {article.urlToImage ? (
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-bold text-lg line-clamp-2">
                {article.title}
              </h3>
              <p className="text-gray-200 text-sm mt-1 line-clamp-1">
                {article.source?.name}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
