import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./DB/connection.js"

dotenv.config();
const port=process.env.port;
const app = express();

//DB connection
connectDB();


app.use(cors());
app.listen(port,()=>console.log(`App listening on port ${port}`));