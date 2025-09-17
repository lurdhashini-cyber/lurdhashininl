const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_URL || 'https://newsapi.org/v2';

/**
 * Fetch top headlines (general)
 */
export async function fetchTopHeadlines(country = 'us') {
  const url = `${BASE_URL}/top-headlines?country=${country}&pageSize=12&apiKey=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error fetching headlines: ${res.statusText}`);
  const data = await res.json();
  return data.articles || [];
}

/**
 * Fetch articles by category
 */
export async function fetchByCategory(category, country = 'us') {
  const url = `${BASE_URL}/top-headlines?country=${country}&category=${category}&pageSize=12&apiKey=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error fetching category: ${res.statusText}`);
  const data = await res.json();
  return data.articles || [];
}

/**
 * Search articles by query
 */
export async function searchArticles(query) {
  const url = `${BASE_URL}/everything?q=${encodeURIComponent(query)}&pageSize=12&sortBy=publishedAt&apiKey=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error searching articles: ${res.statusText}`);
  const data = await res.json();
  return data.articles || [];
}
