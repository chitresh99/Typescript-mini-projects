import type {Request, Response} from 'express';
import { quizzes, type Quiz } from '../models/quiz';

let quizidcounter = 1;

export const createquiz = (req:Request, res:Response) => {
    const {title, description, timelimit, questions} = req.body;

    const newquiz: Quiz = {
        id: quizidcounter++,
        title,
        description,
        timelimit,
        questions,
    };

    quizzes.push(newquiz);
    
    res.status(201).json({ message: 'Quiz created', quiz:newquiz});

};

export const getallquizzes = (req:Request, res:Response) => {
    res.json(quizzes);
};

export const getquizbyid = (req:Request,res:Response) =>{
    const quizid = parseInt(req.params.id!);
    const quiz = quizzes.find(q => q.id === quizid);

    if (!quiz) return res.status(404).json({ message: "Quiz not found"});

    res.json(quiz);
};

export const deletequiz = (req:Request, res: Response) => {
    const quizid = parseInt(req.params.id!);
    const index = quizzes.findIndex(q => q.id === quizid);

    if( index === -1) return res.status(404).json({ message: 'Quiz not found'});

    quizzes.splice(index,1);
    res.json({ message: 'Quiz deleted'});
};
