import { Request, Response, NextFunction } from "express";
import { studentModel } from "../models/Student.Model";

export const ageLimit = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const minAge = parseInt(req.query.minAge as string) || 5;
    const maxAge = parseInt(req.query.maxAge as string) || 11;

    const students = [studentModel.find({ age: { $gte: minAge , $lte:maxAge }})];
    
    return res.status(200).json({message:"Success", students});
  } catch (error) {
    next(error);
  }
};
