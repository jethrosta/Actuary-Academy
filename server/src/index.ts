import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";
import dotenv from "dotenv";

dotenv.config()
const app = express();

const frontendCORS = process.env.frontend || 'http://localhost:5174';

app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173', frontendCORS],
    credentials: true,
  }));

const PORT = parseInt(process.env.PORT) || 3000;

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(PORT, process.env.HOST, () => {
  console.log('Server running on ' + process.env.HOST + ':' + process.env.PORT);
});

const MONGO_URL = 'mongodb+srv://actuary:academy@actuary-academy.mx5dl7v.mongodb.net/aa-user'

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);

mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());