import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center rounded p-2 py-1 cursor-pointer">
        {/* avatar */}
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://avatars.githubusercontent.com/u/157083261?v=4https://avatars.githubusercontent.com/u/157083261?v=4"
              alt="useravatar"
            />
          </div>
        </div>
        {/* username */}
        <div>
          <p>Samir </p>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Conversation;
