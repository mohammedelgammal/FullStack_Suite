// Libraries
import express from "express";

// Models
import UserModel from "../../Models/User.js";

const usersRoute = express.Router();

usersRoute.post("/", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const targetUser = await UserModel.findOne({ username });
    console.log(targetUser);
    if (targetUser)
      return res.status(400).json({
        message: "User already exists!",
      });
    const newUser = UserModel({
      username,
      email,
      password,
    });
    await newUser.save();
    return res.status(200).json({ message: "User created successfully!" });
  } catch (error) {
    console.log("Error: ", error);
    return res
      .status(500)
      .json({ error: "Cannot process your request at this time!" });
  }
});

export default usersRoute;
