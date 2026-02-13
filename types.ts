export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  icon: string;
  image: string;
  recommended?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  size?: 'normal' | 'tall';
}