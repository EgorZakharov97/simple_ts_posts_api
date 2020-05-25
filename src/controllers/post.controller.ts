import {Request, Response} from 'express';
import Database from '../database';

const database: Database = new Database();

export async function getPosts(req: Request, res: Response): Promise<Response> {
    let response = database.getAllPosts();
    return res.json(response)
}