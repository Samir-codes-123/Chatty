import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from "bcryptjs";
import generateTokenAndsetCookie from "../utils/generateToken.js";

export const signup = asyncHandler(async (req, res) => {
  const { fullName, username, password, confirmPassword } = req.body;
  if (password !== confirmPassword)
    throw new ApiError(400, "Password dont match");
  const user = await User.findOne({ username });

  if (user) throw new ApiError(400, "Username already exists");
  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);
  const profilePic = `https://avatar.iran.liara.run/username?username=${fullName}`;

  const newUser = await User.create({
    fullName,
    username,
    password: hashedpassword,
    profilePic,
  });
  if (!newUser)
    throw new ApiError(500, "Something went wrong while creating new user");
  generateTokenAndsetCookie(newUser._id, res);
  const createdUser = await User.findById(newUser._id).select("-password");

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User created successfully"));
});
export const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) throw new ApiError(404, "No user Found");
  const isPassCorrect = await bcrypt.compare(password, user.password || "");
  if (!isPassCorrect) throw new ApiError(400, "Invalid Password");
  generateTokenAndsetCookie(user._id, res);
  return res
    .status(200)
    .json(new ApiResponse(200, user, "User logged in successfully"));
});
export const logout = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .clearCookie("jwt", { maxAge: 0 })
    .json(new ApiResponse(200, null, "User logged out successfully"));
});
