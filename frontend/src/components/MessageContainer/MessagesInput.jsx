import { Send } from "lucide-react";
import React from "react";

const MessagesInput = () => {
  return (
    <form>
      <div className="flex gap-1 mt-8 relative">
        <input
          type="text"
          placeholder="Type here"
          className="w-full input input-bordered input-info"
        />

        <button className="border-none text-xs absolute inset-y-0 end-0 btn btn-outline btn-info ml-6">
          <Send />
        </button>
      </div>
    </form>
  );
};

export default MessagesInput;
