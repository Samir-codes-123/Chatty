import React from "react";
import { useAuthContext } from "../../contexts/Authcontext";
import useConversation from "../../store/useConversation";

const Message = ({ msg }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  if (!msg || !authUser || !selectedConversation) {
    return null; // Render null or a loading spinner if the necessary data is not available
  }
  console.log("authhh", authUser.data._id);

  const fromMe = msg?.senderId === authUser?.data._id;
  const chat = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser?.data.profilePic || "defaultImage.png"
    : selectedConversation?.profilePic || "defaultImage.png";

  return (
    <div className={`chat ${chat}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="useravatar" />
        </div>
      </div>
      <div>
        <div className="chat-bubble">{msg?.message}</div>
        <div className="chat-footer text-xs flex gap-1">
          {new Date(msg?.createdAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default Message;
