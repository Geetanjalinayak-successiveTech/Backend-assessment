import dotenv from "dotenv";
dotenv.config();
import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";

export const authMiddleware =(
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(400).json({ message: "token missing" });
  }

  try {
    const decoded = Jwt.verify(token, process.env.MY_SECRET_KEY!);
    (req as any).user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};


