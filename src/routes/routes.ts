import express from 'express';
import { BlogsRoutes } from '../app/modules/Blogs/router..blog';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/blogs',
    route: BlogsRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
