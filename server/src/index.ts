import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";
import { PORT, DATABASE_URL } from "./helpers/constant";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const MONGO_URL = DATABASE_URL;
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);

mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
