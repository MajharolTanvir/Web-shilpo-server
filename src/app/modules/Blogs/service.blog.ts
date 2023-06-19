import { BlogType } from './interface.blog';
import { Blogs } from './model.blog';

const createBlog = async (payload: BlogType): Promise<BlogType> => {
  const result = await Blogs.create(payload);
  return result;
};
// const getAllBlogs = async () => {};
// const getSingleBlog = async (id: string) => {};
// const updateBlog = async (id: string, payload: BlogType) => {};
// const deleteBlog = async (id: string) => {};

export const BlogsService = {
  createBlog,
  //   getAllBlogs,
  //   getSingleBlog,
  //   updateBlog,
  //   deleteBlog,
};
