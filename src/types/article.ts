export interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  imageUrl: string;
  comments: Comment[];
}

export interface ArticlesData {
  articles: Article[];
} 