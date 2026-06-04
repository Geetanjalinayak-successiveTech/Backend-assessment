import express from "express"
import { registerStudent } from "../controllers/Register.controller"
import { authMiddleware } from "../middlewares/authentication";
import { login } from "../controllers/Login.Controller";
import { deletedStudent, students, updatedStudent } from "../controllers/StudentController";
import { emailVerfication } from "../middlewares/emailValidation";
import { pagination } from "../controllers/Pagination.controller";
import { ageLimit } from "../controllers/MinAgeMAxAge";


export const router= express.Router();

router.post("/postStudent", emailVerfication, registerStudent);
router.post("/login", login);
router.get("/getStudent", authMiddleware, students);
router.get("/getStudentsPagination", pagination)
router.patch("/updateStudent/:id", authMiddleware, updatedStudent );
router.delete("deleteStudent/:id", authMiddleware,deletedStudent);
router.get("/studentAge" , ageLimit );

