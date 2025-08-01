import mongoose from "mongoose";

export const DBConnect = async ()=> {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Student");
    console.log("MongoDB connected Successfully");
  } catch (error) {
    console.error("Connection failed!");
    process.exit(1);
  }
};