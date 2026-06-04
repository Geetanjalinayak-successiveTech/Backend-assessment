import { Request,Response } from "express";
import { findStudent,createStudent } from "../services/Student.Service";


export const registerStudent= async(req:Request,res:Response)=>{
    try {
         

    const existingData= await findStudent(req.body._id);
    if(existingData)
    {
        return res.status(400).json({message:"user already exist"})
    }
    
    const data= await createStudent(req.body);
    return res.status(200).json({message:"user created", data})
        
    } catch (error) {
        return res.status(400).json({message:"Internal error"})
        
    }
   
}

