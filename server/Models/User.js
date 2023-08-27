import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: string,
  email: string,
  password: string,
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
