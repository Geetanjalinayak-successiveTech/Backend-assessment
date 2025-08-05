import { NextFunction, Request, Response } from "express";
import { studentModel } from "../models/Student.Model";

export const pagination = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const sortBy = (req.query.sortBy as string) || "name";
    const order = (req.query.order as string) === "asc" ? 1 : -1;

    const skip = (page - 1) * limit;

    const student = await studentModel
      .find()
      .sort({ [sortBy]: order })
      .skip(skip)
      .limit(limit);
    const total = await studentModel.countDocuments();

    return res.status(200).json({
      success: true,
      total: total,
      page: page,
      pages: Math.ceil(total / limit),
      student,
    });
  } catch (error) {
    next(error);
  }
};
