import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    grade: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password:{type:String , required:true, unique:true}
  },
  { timestamps: true }
);

export const studentModel = mongoose.model("studentModel", studentSchema);
