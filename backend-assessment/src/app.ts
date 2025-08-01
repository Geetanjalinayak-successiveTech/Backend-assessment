import express from "express"
import { router } from "./routes/Student.Routes";


export const app= express();

app.use(express.json())
app.use("/api", router);