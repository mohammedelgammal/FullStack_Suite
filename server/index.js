import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

// Routes
import usersRoute from "./Routes/Users/userRoute.js";

// Application
const app = express();

// Configurations
app.use(express.json());
app.use(cors());

app.use("/users", usersRoute);

// Connect to mongoose
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(process.env.PORT, () => {
  console.log("Server started on port:", process.env.PORT);
});
