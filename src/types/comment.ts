export interface Comment {
  id: number;
  content: string;
  author: string;
  articleId: number;
  createdAt: string;
  parentId?: number;
  likes: number;
  replies?: Comment[];
}