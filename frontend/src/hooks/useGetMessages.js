import { useEffect, useState } from "react";
import useConversation from "../store/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessages = async () => {
      try {
        console.log("selectedconversoation", selectedConversation);

        setLoading(true);
        const res = await fetch(`/api/messages/${selectedConversation?._id}`);
        const data = await res.json();
        console.log("Data", data);

        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data.data);
        //console.log("messages", messages);
      } catch (error) {
        console.log(error);

        toast(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation, setMessages]);
  return { messages, loading };
};

export default useGetMessages;
