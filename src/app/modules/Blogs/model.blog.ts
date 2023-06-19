import { Schema, model } from 'mongoose';
import { BlogModel, BlogType } from './interface.blog';

const blogSchema = new Schema<BlogType, BlogModel>({
  title: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  tag: { type: String, required: true },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export const Blogs = model<BlogType, BlogModel>('Blogs', blogSchema);
