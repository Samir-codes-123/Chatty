import { Send } from "lucide-react";
import React, { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";

const MessagesInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessage(message);
    //   console.log(res);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
        <div>loading..</div>
      ) : (
        <div className="flex gap-1 mt-8 relative">
          <input
            type="text"
            placeholder="Type here"
            className="w-full input input-bordered input-info"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <button
            type="submit"
            className="border-none text-xs absolute inset-y-0 end-0 btn btn-outline btn-info ml-6"
          >
            <Send />
          </button>
        </div>
      )}
    </form>
  );
};

export default MessagesInput;
