import express from "express"
import { router } from "./routes/Student.Routes";
import cookieParser from "cookie-parser";


export const app= express();
app.use(cookieParser());

app.use(express.json())
app.use("/api", router);