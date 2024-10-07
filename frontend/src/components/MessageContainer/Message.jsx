import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        {/* separation of div for round */}
        <div className="w-10 rounded-full">
          <img
            src="https://avatars.githubusercontent.com/u/157083261?v=4https://avatars.githubusercontent.com/u/157083261?v=4"
            alt="useravatar"
          />
        </div>
      </div>
      <div>
        <div className="chat-bubble">You underestimate my power!</div>
        <div className="chat-footer text-xs flex gap-1">12:42 pm</div>
      </div>
    </div>
  );
};

export default Message;
