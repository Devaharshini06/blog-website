import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ArticleCard from '../components/articles/ArticleCard';
import { mockArticles } from '../data/mockArticles';
import { Article } from '../types/article';

const HomePage: React.FC = () => {
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [recentArticles, setRecentArticles] = useState<Article[]>([]);
  const [categoryArticles, setCategoryArticles] = useState<{[key: string]: Article[]}>({});
  const [isLoading, setIsLoading] = useState(true);

  // Categories we want to highlight
  const highlightCategories = ['Technology', 'Lifestyle', 'Health'];

  useEffect(() => {
    // Simulating an API call
    const loadArticles = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Get the featured article
        const featured = mockArticles.find(article => article.featured);
        setFeaturedArticle(featured || null);
        
        // Get recent articles (excluding the featured one)
        const sorted = [...mockArticles].sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setRecentArticles(sorted.filter(article => article.id !== featured?.id).slice(0, 6));
        
        // Group articles by category
        const byCategory: {[key: string]: Article[]} = {};
        highlightCategories.forEach(category => {
          byCategory[category] = mockArticles
            .filter(article => article.category === category)
            .slice(0, 4);
        });
        setCategoryArticles(byCategory);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadArticles();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section with Featured Article */}
      {featuredArticle && (
        <section className="mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ArticleCard article={featuredArticle} featured={true} />
          </div>
        </section>
      )}

      {/* Recent Articles */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">Recent Articles</h2>
            <Link to="/search" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center transition-colors">
              <span>View all</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {highlightCategories.map((category) => (
        <section key={category} className="mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">{category}</h2>
              <Link to={`/category/${category.toLowerCase()}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center transition-colors">
                <span>More in {category}</span>
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryArticles[category]?.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Newsletter Subscription */}
      <section className="py-12 bg-blue-50 dark:bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-3">
            Stay Updated
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles, insights, and updates directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-grow dark:bg-gray-800 dark:text-white"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;