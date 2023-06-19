import { Request, Response } from 'express';
import catchAsync from '../../../Shared/catchAsync';
import { BlogsService } from './service.blog';
import sendResponse from '../../../Shared/sendResponse';
import httpStatus from 'http-status';

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogsService.createBlog(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Create Blog successfully',
    data: result,
  });
});

// const getAllBlogs = catchAsync(
//     async (req: Request, res: Response) => {
//         const result = await BlogsService.getAllBlogs()

//         sendResponse(res, {
//             statusCode: httpStatus.OK,
//             success: true,
//             message: 'Get all blogs successfully',
//             data: result
//         })
//     }
// )

// const getSingleBlog = catchAsync(
//     async (req: Request, res: Response) => {
//         const result = await BlogsService.getSingleBlog(req.params.id)

//         sendResponse(res, {
//             statusCode: httpStatus.OK,
//             success: true,
//             message: 'Get single blog successfully',
//             data: result
//         })
//     }
// )

// const updateBlog = catchAsync(
//     async (req: Request, res: Response) => {
//         const result = await BlogsService.updateBlog(req.params.id, req.body)

//         sendResponse(res, {
//             statusCode: httpStatus.OK,
//             success: true,
//             message: 'Updated blog successfully',
//             data: result
//         })
//     }
// )

// const deleteBlog = catchAsync(
//     async (req: Request, res: Response) => {
//         const result = await BlogsService.deleteBlog(req.params.id)

//         sendResponse(res, {
//             statusCode: httpStatus.OK,
//             success: true,
//             message: 'Delete blog successfully',
//             data: result
//         })
//     }
// )

export const BlogsController = {
  createBlog,
  // getAllBlogs,
  // getSingleBlog,
  // updateBlog,
  // deleteBlog,
};
