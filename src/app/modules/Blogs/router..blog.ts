import express from 'express';
import { BlogsController } from './controller.blog';

const router = express.Router();

router.post('/create-blog', BlogsController.createBlog);
// router.get('/', BlogsController.getAllBlogs)
// router.get('/:id', BlogsController.getSingleBlog)
// router.patch('/:id', BlogsController.updateBlog)
// router.delete('/:id', BlogsController.deleteBlog)

export const BlogsRoutes = router;
