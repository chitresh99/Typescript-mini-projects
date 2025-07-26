import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes'; 
import { authenticate } from './middlewares/auth.middleware';
import quizRoutes from './routes/quiz.routes';
import submissionRoutes from './routes/submission.route';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to quizi');
});

app.use('/api/auth', authRoutes);

app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: 'Protected route accessed!', user: (req as any).user });
});

app.use('/api/quiz',quizRoutes);


app.use('/api/quizzes', submissionRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});