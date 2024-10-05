import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
const protectedRoute = async (req, _, next) => {
  try {
    const token = req.cookies?.jwt;
    // console.log(token);
    if (!token) throw new ApiError(401, "Unauthorized request");

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    //console.log("samir", decoded);

    if (!decoded) throw new ApiError(400, "The token is invalid");
    const user = await User.findById(decoded?.userId).select("-password");
    if (!user) throw new ApiError(401, "Invalid JWT token");
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error.message);
  }
};
export default protectedRoute;
