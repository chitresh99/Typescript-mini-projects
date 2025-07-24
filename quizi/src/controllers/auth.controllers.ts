import { type Request, type Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { users, type User } from "../models/user";

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

export const signup = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: 'Please fill out all the details' });
            return;
        }

        const existinguser = users.find(user => user.email === email);
        if (existinguser) {
            res.status(400).json({ message: "User already exists" });
            return;
        }

        const hashedpassword = await bcrypt.hash(password, 10);

        const newuser: User = {
            id: users.length + 1,
            email,
            password: hashedpassword
        };
        users.push(newuser);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        const user = users.find(u => u.email === email);
        if (!user) {
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }

        const ismatch = await bcrypt.compare(password, user.password);
        if (!ismatch) {
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
