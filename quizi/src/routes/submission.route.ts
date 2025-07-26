import { Router } from 'express';
import { submitQuiz } from '../controllers/submission.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/:id/submit', authenticate, submitQuiz);

export default router;
