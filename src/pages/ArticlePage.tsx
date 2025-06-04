import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ArticleContent from '../components/articles/ArticleContent';
import ArticleCard from '../components/articles/ArticleCard';
import CommentsSection from '../components/articles/CommentsSection';
import { mockArticles } from '../data/mockArticles';
import { mockComments } from '../data/mockComments';
import { Article } from '../types/article';
import { Comment } from '../types/comment';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call
    const loadArticle = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const foundArticle = mockArticles.find(article => article.slug === slug);
        setArticle(foundArticle || null);
        
        if (foundArticle) {
          // Get related articles (same category, excluding current)
          const related = mockArticles
            .filter(a => a.category === foundArticle.category && a.id !== foundArticle.id)
            .slice(0, 3);
          setRelatedArticles(related);
          
          // Get comments for this article
          const articleComments = mockComments.filter(comment => comment.articleId === foundArticle.id);
          setComments(articleComments);
        }
      } catch (error) {
        console.error('Error loading article:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (slug) {
      loadArticle();
      // Scroll to top when article changes
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

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">The article you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
          <ArrowLeft size={16} className="mr-1" />
          Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Back to Homepage
          </Link>
        </div>

        {/* Article Content */}
        <ArticleContent article={article} />
        
        {/* Comments Section */}
        <CommentsSection articleId={article.id} comments={comments} />
        
        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;