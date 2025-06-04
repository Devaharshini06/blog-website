import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import { Article } from '../../types/article';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false }) => {
  const timeAgo = formatDistance(
    new Date(article.createdAt),
    new Date(),
    { addSuffix: true }
  );

  if (featured) {
    return (
      <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
        <Link to={`/article/${article.slug}`} className="block h-full">
          <div className="relative h-96 w-full overflow-hidden">
            <img 
              src={article.coverImage} 
              alt={article.title} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <span className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                {article.category}
              </span>
              <h2 className="mt-2 text-3xl font-serif font-bold leading-tight group-hover:text-blue-100 transition-colors duration-300">
                {article.title}
              </h2>
              <p className="mt-2 line-clamp-2 text-gray-200">
                {article.excerpt}
              </p>
              <div className="mt-4 flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
                  {article.author.name.charAt(0)}
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium">{article.author.name}</p>
                  <p className="text-xs text-gray-300">{timeAgo}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
      <Link to={`/article/${article.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={article.coverImage} 
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        <div className="p-4">
          <span className="inline-block rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2.5 py-0.5 text-xs font-semibold">
            {article.category}
          </span>
          <h3 className="mt-2 text-xl font-serif font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-gray-600 dark:text-gray-300">
            {article.excerpt}
          </p>
          <div className="mt-4 flex items-center">
            <div className="h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-300">
              {article.author.name.charAt(0)}
            </div>
            <div className="ml-2 flex flex-col">
              <span className="text-xs text-gray-600 dark:text-gray-400">{article.author.name}</span>
              <span className="text-xs text-gray-500 dark:text-gray-500">{timeAgo}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;