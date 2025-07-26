import { Router } from 'express';
import { createquiz, getallquizzes,getquizbyid,deletequiz } from '../controllers/quiz.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router()

router.post('/',authenticate,createquiz); 
router.get('/',getallquizzes);
router.get('/:id',getquizbyid);
router.delete('/:id',authenticate,deletequiz)

export default router;


