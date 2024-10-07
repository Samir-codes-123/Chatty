import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "../Conversation/Conversations";
import Logout from "./Logout";

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <Logout />
    </div>
  );
};

export default Sidebar;
