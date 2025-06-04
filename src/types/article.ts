export interface Author {
  id: number;
  name: string;
  bio?: string;
  avatar?: string;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: Author;
  createdAt: string;
  updatedAt: string;
  readTime: number;
  commentCount: number;
  featured?: boolean;
}