import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

// Application
const app = express();

// Configurations
app.use(express.json());
app.use(cors());

app.use("/users", usersRoute);

// Connect to mongoose
mongoose.connect(process.env.DB_URI);

app.listen(process.env.PORT, () => {
  console.log("Server started on port:", process.env.PORT);
});
