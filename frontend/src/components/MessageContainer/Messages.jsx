import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <div className="max-h-screen flex-1 px-4 overflow-auto">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
