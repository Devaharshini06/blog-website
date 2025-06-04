import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ArticleCard from '../components/articles/ArticleCard';
import { mockArticles } from '../data/mockArticles';
import { Article } from '../types/article';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    // Simulating an API call
    const loadArticles = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Format slug to proper category name (e.g., "technology" -> "Technology")
        const formattedCategory = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : '';
        setCategoryName(formattedCategory);
        
        // Filter articles by category
        const filteredArticles = mockArticles.filter(
          article => article.category.toLowerCase() === slug?.toLowerCase()
        );
        setArticles(filteredArticles);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (slug) {
      loadArticles();
      // Scroll to top when category changes
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center">
          <Link to="/" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mr-4">
            <ArrowLeft size={16} className="mr-1" />
            Back
          </Link>
          <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">
            {categoryName} Articles
          </h1>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No articles found in this category.
            </p>
            <Link to="/" className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline">
              Return to homepage
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;