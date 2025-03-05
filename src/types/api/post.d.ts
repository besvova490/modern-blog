// helpers
import { IUser } from './user';
import { ICategory } from './category';

export interface IPost {
  slug: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  postedAt: string;
  commentsCount: number;
  thumbnail: string;
  
  author: IUser;
  categories: ICategory[];
}

export type TResentPost = Pick<IPost, 'slug' | 'title' | 'content' | 'postedAt'>;
