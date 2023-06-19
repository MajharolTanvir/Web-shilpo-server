import { Model, Types } from 'mongoose';

export type BlogType = {
  title: string;
  image: string;
  email: string;
  description: string;
  category: string;
  tag: string;
  author: Types.ObjectId;
};

export type BlogModel = Model<BlogType, object>;
