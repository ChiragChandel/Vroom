export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
};

export type Props = {
  id: number;
  title: string;
  description: string;
  author: string;
  imageUrl: string;
  tag: string;
  likes: number;
  rating: number;
};

export type loading = {
  type: 'loading' | 'error' | 'empty';
  message?: string;
  spinnerSize?: 'sm' | 'md' | 'lg' | 'xl';
  onRetry?: () => void;
};