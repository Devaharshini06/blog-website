import { Comment } from '../types/comment';

export const mockComments: Comment[] = [
  {
    id: 1,
    content: "This is a fantastic article! I especially appreciated the section on healthcare applications. I work in medical research and we're already seeing some of these technologies being implemented.",
    author: "Emily Watson",
    articleId: 1,
    createdAt: "2023-06-16T10:24:00Z",
    likes: 15,
    replies: [
      {
        id: 2,
        content: "I agree! I'm curious about how privacy concerns are being addressed in these healthcare implementations. Do you have any insights from your work?",
        author: "Michael Rodriguez",
        articleId: 1,
        parentId: 1,
        createdAt: "2023-06-16T11:05:00Z",
        likes: 8,
        replies: [
          {
            id: 3,
            content: "Great question! The systems I've seen use a combination of blockchain for verification while keeping sensitive data off-chain with advanced encryption. Patient consent is managed through smart contracts that give granular control over who can access what information and for how long.",
            author: "Emily Watson",
            articleId: 1,
            parentId: 2,
            createdAt: "2023-06-16T11:30:00Z",
            likes: 10,
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 4,
    content: "I'm skeptical about some of these predictions. The timeline seems too aggressive given the regulatory hurdles in healthcare and the technical challenges with scaling blockchain systems.",
    author: "David Chen",
    articleId: 1,
    createdAt: "2023-06-16T13:42:00Z",
    likes: 4,
    replies: []
  },
  {
    id: 5,
    content: "This article inspired me to start implementing some of these sustainable practices. I've already switched to reusable shopping bags and started a small herb garden on my balcony!",
    author: "Sarah Johnson",
    articleId: 2,
    createdAt: "2023-06-11T09:15:00Z",
    likes: 20,
    replies: [
      {
        id: 6,
        content: "That's wonderful to hear, Sarah! I found that starting small like that builds momentum. Next I switched to a bamboo toothbrush and started composting kitchen scraps. Every little bit helps!",
        author: "Taylor Kim",
        articleId: 2,
        parentId: 5,
        createdAt: "2023-06-11T10:07:00Z",
        likes: 12,
        replies: []
      }
    ]
  },
  {
    id: 7,
    content: "I've been practicing mindfulness meditation for over a year now, and it has completely transformed how I handle stress. It takes consistency though - the benefits really compound over time.",
    author: "James Wilson",
    articleId: 3,
    createdAt: "2023-06-06T16:20:00Z",
    likes: 18,
    replies: []
  },
  {
    id: 8,
    content: "As someone new to meditation, I found this guide really accessible. I've been trying the 5-minute practice for a week and already notice I'm less reactive to small annoyances.",
    author: "Priya Patel",
    articleId: 3,
    createdAt: "2023-06-07T08:35:00Z",
    likes: 14,
    replies: []
  }
];