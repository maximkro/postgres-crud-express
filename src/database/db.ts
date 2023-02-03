import dotenv from 'dotenv';
dotenv.config();

import { Pool } from "pg";

const pool: Pool = new Pool({
    user: "postgres",
    password: "",
    host: process.env.DB_URL,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
});

export default pool;