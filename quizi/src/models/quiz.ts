export type Question = {
    id: number;
    text: string;
    options: string[];
    correctanswers: Number[]; //indexes of correct options
};

export type Quiz = {
    id: number;
    title:string;
    description: string,
    timelimit: number,
    questions: Question[];
}

export const quizzes: Quiz[] = [];

