import type {Request, Response} from 'express';
import {quizzes,type Quiz} from '../models/quiz';

let quizidcounter = 1;

export const createquiz = (req:Request, res:Response) => {
    const {title, description, timelimit,}
}