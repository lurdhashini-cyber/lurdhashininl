import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiSearch, HiX } from 'react-icons/hi';

export default function SearchWidget() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search news..."
        className="w-64 pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {query ? (
        <button
          type="button"
          onClick={() => setQuery('')}
          className="absolute right-10 top-2.5 text-gray-400 hover:text-gray-600"
        >
          <HiX className="h-5 w-5" />
        </button>
      ) : null}
      <button
        type="submit"
        className="absolute right-3 top-2.5 text-gray-400 hover:text-blue-600"
      >
        <HiSearch className="h-5 w-5" />
      </button>
    </form>
  );
}
