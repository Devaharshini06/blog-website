import React from 'react';
import ReactMarkdown from 'react-markdown';
import { formatDistance } from 'date-fns';
import { Article } from '../../types/article';
import { Bookmark, Share2, MessageSquare } from 'lucide-react';

interface ArticleContentProps {
  article: Article;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  const timeAgo = formatDistance(
    new Date(article.createdAt),
    new Date(),
    { addSuffix: true }
  );

  return (
    <article className="max-w-4xl mx-auto">
      {/* Article header */}
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          {article.title}
        </h1>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-300">
            {article.author.name.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">{article.author.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(article.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              {' · '}{article.readTime} min read
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-between pb-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <span className="inline-block rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2.5 py-0.5 text-xs font-semibold">
              {article.category}
            </span>
            {article.tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-block rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2.5 py-0.5 text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4 text-gray-500 dark:text-gray-400">
            <button className="flex items-center space-x-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Bookmark size={18} />
              <span className="text-sm">Save</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              <Share2 size={18} />
              <span className="text-sm">Share</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <MessageSquare size={18} />
              <span className="text-sm">{article.commentCount} Comments</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured image */}
      <div className="mb-8 rounded-xl overflow-hidden">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Article body */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown>
          {article.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default ArticleContent;