import express, { NextFunction, Request, Response } from 'express';
import app from './App';

const start = () => {
    app.use((req: Request, res: Response, next: NextFunction) => {
        res.header('Acess-Control-Allow-Origin', '*');
        res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested_With, Content-Type, Accept, Authorization');

        if(req.method === 'OPTIONS') {
            res.header('Acess-Cotrol-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });

    app.listen(5000, () => console.log('server runs...'));
}

start();