import mongoose from "mongoose";
import { Message } from "../models/message.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Conversation } from "../models/conversation.model.js";

export const sendMsg = asyncHandler(async (req, res) => {
  const { id: recieverId } = req.params;
  const senderId = req.user?._id;
  const { message } = req.body;
  if (!mongoose.isValidObjectId(recieverId))
    throw new ApiError(400, "Invalid user");

  // if convo already exists
  let conversation = await Conversation.findOne({
    participants: {
      $all: [senderId, recieverId],
    },
  });
  // if not then create
  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, recieverId], // msg empty by default
    });
  }
  const newMsg = await Message.create({
    senderId,
    recieverId,
    message,
  });
  if (!newMsg)
    throw new ApiError(500, "Something went wrong while creating the message");

  conversation.messages.push(newMsg);
  await conversation.save();
  //TODO adding socket.io here later
  return res
    .status(201)
    .json(new ApiResponse(201, newMsg, "Message sent successfully"));
});

export const getMsg = asyncHandler(async (req, res) => {
  const { id: userToChatId } = req.params;

  if (!mongoose.isValidObjectId(userToChatId))
    throw new ApiError(400, "Invalid user");

  const conversation = await Conversation.findOne({
    participants: {
      $all: [req.user?._id, userToChatId],
    },
    // array of message retriving
  }).populate("messages"); // full document retrieve

  if (!conversation) throw new ApiError(404, "No messages found");
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        conversation.messages,
        "Messages fetched successfully"
      )
    );
});
