import type { Request, Response } from 'express';
import { quizzes } from '../models/quiz';
import type { AuthRequest } from '../middlewares/auth.middleware';

type useranswer = {
  questionId: number;
  selectedAnswers: number[];
};

export const submitQuiz = (req: AuthRequest, res: Response) => {
  const quizid = parseInt(req.params.id!);
  const quiz = quizzes.find(q => q.id === quizid);

  if(!quiz) return res.status(404).json({ message: 'Quiz not found'});

  const useranswers: useranswer[] = req.body.answers;
  let score = 0;
  
  /*
   Used for transforming arrays, such as doubling numbers in an array or extracting specific properties from an array of objects.
  */

   /*
   Set allows storage for a collection of special values
   */

  const detailedresults = quiz.questions.map(question => {
    const useranswer = useranswers.find(a => a.questionId === question.id);
    const correctset = new Set(question.correctanswers);
    const selectedset = new Set(useranswer?.selectedAnswers || []);

    const iscorrect = 
      correctset.size === selectedset.size && [...correctset].every(ans => selectedset.has(Number(ans)));

    if (iscorrect) score++;

    return {
      questionId: question.id,
      correct: iscorrect,
      correctAnswers: question.correctanswers,
      userSelected: [...selectedset],
    };
  });

   res.json({
    score,
    total: quiz.questions.length,
    details: detailedresults,
  });
};
