import {Router} from 'express'
import postController from '../controllers/post.controller';
const router = Router();

router.post('/post', postController.createPost);
router.get('/post', postController.getPostsByUsers);

export default router;
