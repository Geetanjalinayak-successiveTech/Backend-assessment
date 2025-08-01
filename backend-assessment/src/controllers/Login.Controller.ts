import { Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { findStudent } from "../services/Student.Service";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response) => {
  try {
    const user = await findStudent(req.body.id);
    if (!user) {
      return res.status(400).json({ message: "user not exist" });
    }

    const pass = await bcrypt.compare(req.body.password, user.password);
    if (!pass) {
      return res.status(400).json({ message: "invalid password" });
    }
    const token = Jwt.sign(
      { id: user._id, email: user.email},
      process.env.MY_SECRET_KEY!,
      {
        expiresIn: "1d",
      }
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    return res.status(200).json({ message: "login Sucessful" });
  } catch (error) {
    return res.status(400).json({ message: "Internal error", error });
  }
};
