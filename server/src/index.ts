import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";

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

server.listen(3000, () => {
  //sebelumnya 8080
  console.log("Server running on http://localhost:3000");
});

// const MONGO_URL = "mongodb+srv://admin-haydar:Test123@cluster0.85fxdxq.mongodb.net/aa-dev"
// const MONGO_URL = "mongodb+srv://actuary:academy@actuary-academy.mx5dl7v.mongodb.net/aa-user";
const MONGO_URL = "mongodb+srv://tonisyd:0pplMhQIB4hWbvoA@aacluster1.vxyg1tc.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);

mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
