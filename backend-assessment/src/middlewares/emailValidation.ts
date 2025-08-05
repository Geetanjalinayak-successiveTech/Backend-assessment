import { NextFunction, Request, Response } from "express";
import { findStudentByEmail } from "../services/Student.Service";

export const emailVerfication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.body.email;
    const existingEmail = await findStudentByEmail(email);

    if (existingEmail) {
      return res.status(400).json({ message: "Email already exist" });
    }
    next();
  } catch (error) {
    next(error);
  }
};
