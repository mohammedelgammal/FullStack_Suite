// Libraries
import express from "express";

// Models
import UserModel from "/server/Models/User";

const usersRoute = express.Router();

usersRoute.post("/", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const targetUser = await UserModel.findOne({ username });
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
    return res.status(200).json("User created successfully!");
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Cannot process your request at this time!" });
  }
});

export default usersRoute;
