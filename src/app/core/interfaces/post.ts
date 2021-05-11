export interface Post {
  id?: string;
  title: string;
  text: string;
  author: string;
  dateCreatedAt?: number;
  tags: string | string[];
}
