export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}