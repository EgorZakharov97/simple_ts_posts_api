import { Router } from 'express';
import {
    getAllPosts,
    createPost,
    getPostById,
    deletePostById,
    updateById
                } from '../controllers/post.controller';

const router = Router();

router.route('/')
    .get(getAllPosts)
    .post(createPost);

router.route('/:postId')
    .get(getPostById)
    .delete(deletePostById)
    .put(updateById);

export default router;