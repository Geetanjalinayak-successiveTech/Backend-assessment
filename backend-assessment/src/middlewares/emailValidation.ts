import { Request,Response } from "express";
import { findStudent } from "../services/Student.Service";


export const emailVerfication = (req:Request,res:Response)=>{
    try {
        const data= findStudent(req.body.id);
        const existingEmail= (req as any).user.email;

        
        
    } catch (error) {
        
    }
}
