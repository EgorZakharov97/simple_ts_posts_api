import {Request, Response} from 'express';
import {connect} from '../connect';
import {Post} from '../interfaces/Post';

export async function getAllPosts(req: Request, res: Response): Promise<Response> {
    let conn = await connect();
    const posts = await conn.query('SELECT * FROM posts');
    return res.json(posts[0])
}

export async function createPost(req: Request, res: Response): Promise<Response> {
    const newPost: Post = req.body;
    newPost.created_at = new Date();
    const conn = await connect();
    conn.query(`INSERT INTO posts SET ?`, [newPost]);
    return res.json({
        message: 'Post Created'
    });
}

export async function getPostById(req: Request, res: Response): Promise<Response> {
    const postID = req.params.postId;
    const conn = await connect();
    const thePost = await conn.query("SELECT * FROM posts WHERE id= ?", [postID]);
    return res.json(thePost[0]);
}

export async function deletePostById(req: Request, res: Response): Promise<Response> {
    const postID = req.params.postId;
    const conn = await connect();
    const thePost = await conn.query("DELETE FROM posts WHERE id= ?", [postID]);
    return res.json({
        message: 'Post Deleted'
    });
}

export async function updateById(req: Request, res: Response): Promise<Response> {
    const postID = req.params.postId;
    const updatePost: Post = req.body;
    const conn = await connect();

    const thePost = await conn.query(
        "UPDATE posts set ? WHERE id= ?",
        [updatePost, postID]
    );

    return res.json({
        message: 'Post Updated'
    });
}