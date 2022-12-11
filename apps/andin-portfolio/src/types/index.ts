export interface PreviewCardProps {
  img: string;
  company: string;
  description: string;
  tags?: string[];
}

export interface Post {
  id: string;
  title: string;
  description: string;
  publishedAt: Date;
}
