import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
const API_KEY = process.env.API_KEY;

app.listen(PORT, () => console.log("Your server is running on PORT " + PORT))

