import { Link, useLocation } from 'react-router-dom';
import { HiOutlineSearch, HiOutlineBookmark, HiOutlineShare } from 'react-icons/hi';

export default function NavBar() {
  const location = useLocation();
  const categories = ['world', 'business', 'technology', 'sports', 'entertainment'];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-blue-600 text-white font-bold px-3 py-1 rounded">IS</div>
            <span className="ml-2 text-xl font-semibold">InsightStream</span>
          </Link>

          {/* Categories */}
          <div className="hidden md:flex space-x-6">
            {categories.map(category => (
              <Link 
                key={category}
                to={`/category/${category}`}
                className={`capitalize ${location.pathname.includes(category) 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-600 hover:text-blue-500'}`}
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/search" className="p-2 rounded-full hover:bg-gray-100">
              <HiOutlineSearch className="h-5 w-5 text-gray-600" />
            </Link>
            <Link to="/saved" className="p-2 rounded-full hover:bg-gray-100">
              <HiOutlineBookmark className="h-5 w-5 text-gray-600" />
            </Link>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <HiOutlineShare className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
