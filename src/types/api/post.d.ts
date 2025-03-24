// helpers
import { IUser } from './user.d';
import { ICategory } from './category.d';

export interface IPost {
  slug: string;
  title: string;
  content: string;
  postedAt: string;
  commentsCount: number;
  thumbnail: string;

  createdAt: string;
  updatedAt: string;
  
  author: IUser;
  categories: ICategory[];
}

export type TResentPost = Pick<IPost, 'slug' | 'title' | 'content' | 'postedAt'>;
