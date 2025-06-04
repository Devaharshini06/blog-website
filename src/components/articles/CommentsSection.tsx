import React, { useState } from 'react';
import { Comment as CommentType } from '../../types/comment';
import Comment from './Comment';
import { useAuth } from '../../contexts/AuthContext';

interface CommentsSectionProps {
  articleId: number;
  comments: CommentType[];
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ articleId, comments }) => {
  const [commentsList, setCommentsList] = useState<CommentType[]>(comments);
  const [newComment, setNewComment] = useState('');
  const { isAuthenticated, user } = useAuth();

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && isAuthenticated && user) {
      const comment: CommentType = {
        id: Date.now(),
        content: newComment,
        author: user.name,
        articleId,
        createdAt: new Date().toISOString(),
        likes: 0,
        replies: []
      };
      
      setCommentsList([comment, ...commentsList]);
      setNewComment('');
    }
  };

  const handleReply = (parentId: number, content: string) => {
    if (!isAuthenticated || !user) return;

    const reply: CommentType = {
      id: Date.now(),
      content,
      author: user.name,
      articleId,
      createdAt: new Date().toISOString(),
      likes: 0,
      parentId: parentId,
      replies: []
    };

    // Add the reply to the parent comment
    const updatedComments = commentsList.map(comment => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), reply]
        };
      }
      return comment;
    });

    setCommentsList(updatedComments);
  };

  return (
    <div className="mt-12 max-w-4xl mx-auto">
      <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">
        Comments ({commentsList.filter(c => !c.parentId).length})
      </h2>

      {isAuthenticated ? (
        <form onSubmit={handleAddComment} className="mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
            rows={4}
            placeholder="Write your comment..."
          />
          <div className="mt-2 flex justify-end">
            <button
              type="submit"
              disabled={!newComment.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Post Comment
            </button>
          </div>
        </form>
      ) : (
        <div className="mb-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
          <p className="text-gray-700 dark:text-gray-300">
            Please <a href="/login" className="text-blue-600 dark:text-blue-400 hover:underline">log in</a> to join the discussion.
          </p>
        </div>
      )}

      <div className="space-y-1 divide-y divide-gray-200 dark:divide-gray-700">
        {commentsList.filter(comment => !comment.parentId).map((comment) => (
          <Comment key={comment.id} comment={comment} onReply={handleReply} />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;