import { Link } from 'react-router-dom';

const categories = [
  { name: 'business', icon: '💼', color: 'bg-blue-100 text-blue-800' },
  { name: 'technology', icon: '💻', color: 'bg-purple-100 text-purple-800' },
  { name: 'sports', icon: '⚽', color: 'bg-green-100 text-green-800' },
  { name: 'entertainment', icon: '🎬', color: 'bg-yellow-100 text-yellow-800' },
  { name: 'health', icon: '❤️', color: 'bg-red-100 text-red-800' },
  { name: 'science', icon: '🔬', color: 'bg-indigo-100 text-indigo-800' },
];

export default function CategoryExplorer() {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Explore by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map(category => (
          <Link
            key={category.name}
            to={`/category/${category.name}`}
            className={`${category.color} rounded-lg p-4 text-center transition-transform hover:scale-105 hover:shadow-md`}
          >
            <div className="text-3xl mb-2">{category.icon}</div>
            <h3 className="font-medium capitalize">{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
