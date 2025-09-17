import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';
import SearchWidget from '../components/SearchWidget';
import { searchArticles } from '../api/newsApi';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchPage() {
  const query = useQuery();
  const q = query.get('q') || '';
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!q) return;
    async function loadSearch() {
      try {
        setLoading(true);
        const data = await searchArticles(q);
        setResults(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadSearch();
  }, [q]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Search</h1>
        <SearchWidget />
      </div>
      {q ? (
        <div>
          <p className="text-sm text-gray-600 mb-4">Results for <strong>"{q}"</strong></p>
          {loading ? (
            <p>Searching...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((r, i) => <NewsCard key={i} article={r} />)}
            </div>
          )}
        </div>
      ) : (
        <p className="text-gray-600">Type a query in the search box to start.</p>
      )}
    </div>
  );
}
