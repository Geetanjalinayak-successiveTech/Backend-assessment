import mongoose from "mongoose";
import { DBConnect } from "./config/ConnectDb";
import { app } from "./app";

const startServer = async () => {
  try {
    await DBConnect();
    console.log("MongoDB Connected");

    app.listen(3000, () => console.log("serever started at 3000"));
  } catch (error) {
    console.log("connection failed");
  }
};

startServer();
