import React from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  // console.log("messages", messages);

  return (
    <div className="max-h-screen flex-1 px-4 overflow-auto">
      {loading && <div>add skeleton</div>}
      {!messages && <div>Enter a message</div>}
      {!loading &&
        messages?.map((msg, index) => (
          <Message key={msg.data?._id || index} msg={msg} />
        ))}
    </div>
  );
};

export default Messages;
