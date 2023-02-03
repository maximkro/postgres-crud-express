import express from "express";
import userRouter from './routes/user.router';
import postRouter from './routes/post.router';
const app = express();

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRouter);

export default app;
