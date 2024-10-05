import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getUsersForSidebar = asyncHandler(async (req, res) => {
  const loggedInUser = req.user?._id;
  const filteredUser = await User.find({ id: { $ne: loggedInUser } }).select(
    "-password"
  ); // all but not the loggedIn user
  return res
    .status(200)
    .json(new ApiResponse(200, filteredUser, "Users fetched successfully"));
});
