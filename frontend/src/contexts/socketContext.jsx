import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./Authcontext";
import io from "socket.io-client";
const SocketContext = createContext();
export const useSocketContext = () => {
  return useContext(SocketContext);
};
export const SocketContextProvider = ({ children }) => {
  // Capitalized
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();
  // console.log(authUser.data._id);

  useEffect(() => {
    if (authUser) {
      const socket = io("https://chatty-backend-epnc.onrender.com", {
        query: {
          userId: authUser.data._id,
        },
      });
      setSocket(socket);
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
