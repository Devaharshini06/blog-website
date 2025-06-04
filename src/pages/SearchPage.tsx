import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import ArticleCard from '../components/articles/ArticleCard';
import { mockArticles } from '../data/mockArticles';
import { Article } from '../types/article';

const SearchPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  const initialCategory = queryParams.get('category') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Get unique categories from mockArticles
  const categories = Array.from(new Set(mockArticles.map(article => article.category)));

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    setIsSearching(true);
    setHasSearched(true);
    
    // Simulate API call
    setTimeout(() => {
      let results = [...mockArticles];
      
      // Filter by search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        results = results.filter(
          article =>
            article.title.toLowerCase().includes(query) ||
            article.content.toLowerCase().includes(query) ||
            article.excerpt.toLowerCase().includes(query) ||
            article.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }
      
      // Filter by category
      if (selectedCategory) {
        results = results.filter(
          article => article.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }
      
      setArticles(results);
      setIsSearching(false);
      
      // Update URL with search parameters
      const params = new URLSearchParams();
      if (searchQuery) params.set('q', searchQuery);
      if (selectedCategory) params.set('category', selectedCategory);
      
      const newUrl = `${location.pathname}?${params.toString()}`;
      window.history.pushState({}, '', newUrl);
    }, 500);
  };

  // Initial search based on URL parameters
  useEffect(() => {
    if (initialQuery || initialCategory) {
      handleSearch();
    }
  }, []);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8">
          Search Articles
        </h1>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full rounded-md border-gray-300 dark:border-gray-600 pl-10 pr-4 py-3 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Search for articles, topics, or keywords..."
              />
            </div>
            <div className="md:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full rounded-md border-gray-300 dark:border-gray-600 py-3 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {/* Search Results */}
        {isSearching ? (
          <div className="flex justify-center my-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {hasSearched && (
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-400">
                  {articles.length} results found
                  {searchQuery && ` for "${searchQuery}"`}
                  {selectedCategory && ` in ${selectedCategory}`}
                </p>
              </div>
            )}

            {hasSearched && articles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : hasSearched ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  No articles found matching your search criteria.
                </p>
                <p className="mt-2 text-gray-500 dark:text-gray-500">
                  Try different keywords or browse all articles.
                </p>
                <Link to="/" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline">
                  Return to homepage
                </Link>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Search for articles by keyword, topic, or browse by category.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;