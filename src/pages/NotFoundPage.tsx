import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400">404</h1>
      <h2 className="mt-4 text-3xl font-serif font-bold text-gray-900 dark:text-white">
        Page Not Found
      </h2>
      <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400 max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="mt-8 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        <Home size={18} className="mr-2" />
        Return Home
      </Link>
    </div>
  );
};

export default NotFoundPage;