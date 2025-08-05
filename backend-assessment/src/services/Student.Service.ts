import { studentModel } from "../models/Student.Model";
import bcrypt from "bcrypt";


export const createStudent= async(data:{name:string, age:number,grade:string, email:string, password:string})=>{
    const hashedPassword= await bcrypt.hash(data.password,10);
    return await studentModel.create({...data, password:hashedPassword});

}

export const findStudent = async(userId:string)=>{
    return await studentModel.findById(userId);
}

export const updateStudent = async(userId:string , update:{name?:string, age?:number, grade?:string})=>{
    return await studentModel.findByIdAndUpdate(userId, update, {new:true})

}

export const deleteStudent = async(userId:string)=>{
    return await studentModel.findByIdAndDelete(userId);
}

export const getStudent = async()=>{
    return await studentModel.find();
}

export const findStudentByEmail= async(email:string)=>{
    return await studentModel.findOne({email});
}

