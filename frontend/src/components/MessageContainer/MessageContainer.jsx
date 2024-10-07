import React from "react";
import Messages from "./Messages";
import MessagesInput from "./MessagesInput";

const MessageContainer = () => {
  const nochat = false;
  return (
    <div>
      {nochat ? (
        <div>
          <div>To: Header</div>
          NOchat
          <MessagesInput />
        </div>
      ) : (
        <div>
          {/* header */}
          <div>To: Header</div>
          <Messages />
          <MessagesInput />
        </div>
      )}
    </div>
  );
};

export default MessageContainer;
