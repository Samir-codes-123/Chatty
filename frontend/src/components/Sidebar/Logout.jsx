import React from "react";
import { LogOut } from "lucide-react";
import useLogout from "../../hooks/useLogout";
const Logout = () => {
  const { loading, logout } = useLogout();
  return (
    <div>
      {loading ? (
        <div>loading </div>
      ) : (
        <button className=" my-4 btn btn-outline btn-info" onClick={logout}>
          <LogOut />
        </button>
      )}
    </div>
  );
};

export default Logout;
