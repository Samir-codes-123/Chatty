import { useSocketContext } from "../../contexts/socketContext";
import useConversation from "../../store/useConversation";

const Conversation = ({ conversation, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation?._id;
  //console.log(selectedConversation);
  const { onlineUsers } = useSocketContext();
  // console.log("convo", conversation._id);
  // console.log(onlineUsers);
  const isOnline = onlineUsers.includes(conversation._id);
  console.log(isOnline);

  //console.log(isSelected);

  return (
    <>
      <div
        className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-white" : null}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        {/* avatar */}
        <div className={`avatar ${isOnline ? "online" : ""} `}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="useravatar" />
          </div>
        </div>
        {/* username */}
        <div>
          <p>{conversation.username} </p>
        </div>
      </div>

      {!lastIndex && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;
