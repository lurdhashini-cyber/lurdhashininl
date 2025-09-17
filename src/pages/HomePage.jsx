import { useEffect, useState } from 'react';
import VisualGallery from '../components/VisualGallery';
import CategoryExplorer from '../components/CategoryExplorer';
import NewsCard from '../components/NewsCard';
import { fetchTopHeadlines } from '../api/newsApi';

export default function HomePage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        setLoading(true);
        const news = await fetchTopHeadlines('us');
        setArticles(news);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadNews();
  }, []);

  return (
    <div className="space-y-6">
      {loading ? <p>Loading headlines...</p> : <VisualGallery articles={articles.slice(0, 5)} />}
      <CategoryExplorer />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((a, idx) => <NewsCard key={idx} article={a} />)}
      </div>
    </div>
  );
}
