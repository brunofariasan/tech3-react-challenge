export interface Author {
  id: string;
  name: string;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  html: string;
  slug: string;
  status?: string;
  updated_at?: string;
  primary_author: Author;
}

export type PostFormData = Partial<Pick<Post, 'title' | 'html' | 'description'>>;
