import React, { useState } from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  //console.log("conversations", conversations);

  return (
    <div className="flex flex-col overflow-auto">
      {loading ? <div>Loading</div> : null}
      {conversations.data?.map((convo, index) => (
        <Conversation
          key={convo._id}
          conversation={convo}
          lastIndex={index === conversations.data.length - 1} // to remove divider for last convo
        />
      ))}
    </div>
  );
};

export default Conversations;
