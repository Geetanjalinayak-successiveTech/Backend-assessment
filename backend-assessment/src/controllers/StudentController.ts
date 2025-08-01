import { Request, Response } from "express";
import {
  updateStudent,
  deleteStudent,
  getStudent,
} from "../services/Student.Service";

export const students = async (req: Request, res: Response) => {
  try {
    const allData = await getStudent();
    res.status(200).json({ message: "Students", allData });
  } catch (error) {
    return res.status(400).json({ message: "internal error", error });
  }
};

export const updatedStudent = async (req: Request, res: Response) => {
  try {
    const updated = updateStudent(req.params.id, req.body);
    return res.status(200).json({ message: "Updated sucessfully", updated });
  } catch (error) {
    return res.status(400).json({ message: "internal error", error });
  }
};

export const deletedStudent = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    deleteStudent(userId);
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    return res.status(400).json({ message: "internal error", error });
  }
};
