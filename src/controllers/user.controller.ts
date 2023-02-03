import { Request, Response, response } from "express";
import db from '../database/db';
import { QueryResult } from "pg";

class UserController {
    async createUser(req: Request, res: Response) {
        const { name, surname } = req.body;
        const newPerson = await db.query(`INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *`, [name, surname]);
        res.status(201).json(newPerson.rows[0]);
    }

    async getUsers(req: Request, res: Response) {
        const response = await db.query('SELECT * FROM person');
        res.status(200).json(response.rows);
    }

    async getOneUser(req: Request, res: Response) {
        const id = req.params.id;
        const response = await db.query('SELECT * FROM person WHERE id=$1', [id]);
        res.status(200).json(response.rows[0]);
    }

    async updateUser(req: Request, res: Response) {
        const { id, name, surname } = req.body;
        const response = await db.query('UPDATE person SET name=$1, surname=$2 WHERE id=$3 RETURNING *', [name, surname, id]);
        res.status(200).json(response.rows[0]);
    }

    async deleteUser(req: Request, res: Response) {
        const id = req.params.id;
        const response = await db.query('DELETE FROM person WHERE id = $1 RETURNING *', [id]);
        res.json(response.rows[0]);
    }
}

export default new UserController();