import { type IUser } from './user';

export interface IComment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: IUser;
  parentId: number | null;
  replies?: IComment[];
  blogPost: {
    title: string;
    slug: string;
  };
}
