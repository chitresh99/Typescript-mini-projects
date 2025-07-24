// import type { Request, Response, NextFunction } from 'express';
// import jwt, { JwtPayload } from 'jsonwebtoken';

// const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

// export interface AuthRequest extends Request {
//   user?: { id: number; email: string };
// }

// // Custom JWT payload interface
// interface CustomJWTPayload extends JwtPayload {
//   id: number;
//   email: string;
// }

// export const authenticate = (req: AuthRequest, res: Response, next: NextFunction): void => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     res.status(401).json({ message: 'No token provided' });
//     return;
//   }

//   const token = authHeader.split(' ')[1];

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET) as CustomJWTPayload;
    
//     // Validate that our custom properties exist
//     if (typeof decoded.id !== 'number' || typeof decoded.email !== 'string') {
//       res.status(401).json({ message: 'Invalid token payload' });
//       return;
//     }
    
//     req.user = {
//       id: decoded.id,
//       email: decoded.email
//     };
//     next();
//   } catch (err) {
//     if (err instanceof jwt.TokenExpiredError) {
//       res.status(401).json({ message: 'Token expired' });
//       return;
//     }
//     if (err instanceof jwt.JsonWebTokenError) {
//       res.status(401).json({ message: 'Invalid token' });
//       return;
//     }
//     res.status(500).json({ message: 'Token verification failed' });
//   }
// };