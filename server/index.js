import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import loginRoute from "./routes/login.js";
import logoutRoute from "./routes/logout.js";
import signupRoute from "./routes/signup.js";
import taskRoute from "./routes/task.js";
import corsOptions from "./config/corsOptions.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database succesfully connected");
  })
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);
app.use("/task", taskRoute);

app.listen(PORT, () => {
  console.log(`Server running at PORT : ${PORT}`);
});
