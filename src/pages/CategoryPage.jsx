import { useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import { useEffect, useState } from 'react';
import { fetchByCategory } from '../api/newsApi';

export default function CategoryPage() {
  const { name } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategory() {
      try {
        setLoading(true);
        const news = await fetchByCategory(name, 'us');
        setArticles(news);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadCategory();
  }, [name]);

  return (
    <div>
      <h1 className="text-2xl font-bold capitalize mb-4">{name}</h1>
      {loading ? (
        <p>Loading {name} news...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((a, i) => <NewsCard key={i} article={a} />)}
        </div>
      )}
    </div>
  );
}
