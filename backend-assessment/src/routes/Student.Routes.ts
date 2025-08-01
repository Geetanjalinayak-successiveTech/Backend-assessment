import express from "express"
import { registerStudent } from "../controllers/Register.controller"
import { authMiddleware } from "../middlewares/authentication";
import { login } from "../controllers/Login.Controller";
import { deletedStudent, students, updatedStudent } from "../controllers/StudentController";


export const router= express.Router();

router.post("/postStudent", registerStudent);
router.post("/login", login);
router.get("/getStudent", authMiddleware, students);

router.patch("/updateStudent/:id", authMiddleware, updatedStudent );
router.delete("deleteStudent/:id", authMiddleware,deletedStudent)

