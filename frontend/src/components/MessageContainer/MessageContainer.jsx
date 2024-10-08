import { useEffect } from "react";
import Messages from "./Messages";
import MessagesInput from "./MessagesInput";
import useConversation from "../../store/useConversation";
const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  //console.log("Selected", selectedConversation);
  useEffect(() => {
    return () => setSelectedConversation(null); //unmount
  }, [setSelectedConversation]); // to remove selected convo after sessions
  return (
    <div>
      {!selectedConversation ? (
        <div>NOchat</div>
      ) : (
        <div>
          {/* header */}
          <div>To: {selectedConversation.fullName}</div>
          <Messages />
          <MessagesInput />
        </div>
      )}
    </div>
  );
};

export default MessageContainer;
