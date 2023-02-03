import { Request, Response } from "express";
import db from '../database/db'

class PostController {
    async createPost(req: Request, res: Response) {
        const {title, content, user_id} = req.body;
        const response = await db.query('INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *', [title, content, user_id]);
        res.status(201).json(response.rows[0]);
    }

    async getPostsByUsers(req: Request, res: Response) {
        const id = req.query.id;
        const respose = await db.query('SELECT * FROM post where user_id=$1', [id]);
        res.status(200).json(respose.rows);
    }
}

export default new PostController();