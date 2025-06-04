import React, { useState } from 'react';
import { formatDistance } from 'date-fns';
import { ThumbsUp, MessageSquare, Flag } from 'lucide-react';
import { Comment as CommentType } from '../../types/comment';
import { useAuth } from '../../contexts/AuthContext';

interface CommentProps {
  comment: CommentType;
  onReply: (parentId: number, content: string) => void;
}

const Comment: React.FC<CommentProps> = ({ comment, onReply }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const [liked, setLiked] = useState(false);
  const { isAuthenticated } = useAuth();
  
  const timeAgo = formatDistance(
    new Date(comment.createdAt),
    new Date(),
    { addSuffix: true }
  );

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (replyContent.trim()) {
      onReply(comment.id, replyContent);
      setReplyContent('');
      setIsReplying(false);
    }
  };

  return (
    <div className="py-4">
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-200">
            {comment.author.charAt(0)}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
            <div className="flex items-center">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {comment.author}
              </p>
              <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                {timeAgo}
              </span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              {comment.content}
            </p>
          </div>
          
          <div className="mt-2 flex items-center space-x-4 text-xs">
            <button 
              onClick={() => setLiked(!liked)}
              className={`flex items-center space-x-1 ${
                liked ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
              } hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
            >
              <ThumbsUp size={14} />
              <span>{liked ? comment.likes + 1 : comment.likes} Likes</span>
            </button>
            
            {isAuthenticated && (
              <button 
                onClick={() => setIsReplying(!isReplying)}
                className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <MessageSquare size={14} />
                <span>Reply</span>
              </button>
            )}
            
            <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              <Flag size={14} />
              <span>Report</span>
            </button>
          </div>
          
          {isReplying && (
            <form onSubmit={handleSubmitReply} className="mt-3">
              <textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                rows={2}
                placeholder="Write your reply..."
              />
              <div className="mt-2 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsReplying(false)}
                  className="px-3 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Reply
                </button>
              </div>
            </form>
          )}
          
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-4 ml-4 border-l-2 border-gray-200 dark:border-gray-700 pl-4 space-y-4">
              {comment.replies.map((reply) => (
                <Comment key={reply.id} comment={reply} onReply={onReply} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;