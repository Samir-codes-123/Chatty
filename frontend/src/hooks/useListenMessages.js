import { useEffect } from "react";
import { useSocketContext } from "../contexts/socketContext";
import useConversation from "../store/useConversation";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();
  console.log(messages);

  useEffect(() => {
    socket?.on("newMessage", (newMsg) => {
      setMessages([...messages, newMsg]);
    });
    return () => socket.off("newMessage");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
