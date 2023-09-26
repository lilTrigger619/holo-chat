import io from "socket.io-client";
import CoolInput from "./components/input";
import ChatThread from "./components/chatThread";
import { createContext, useState, useEffect } from "react";

export const ChatThreadsContext = createContext(null);

export default function App() {
  const [threads, setThreads] = useState([]);
  let socket;
  useEffect(() => {
    socket = io();
		socket.emit("joinRoom", "testRoom");
  }, []);
  //socket.emit("chat message", "somethig");
  useEffect(() => {
    socket.on("recieveMessage", (message) => {
      setThreads((p) => [...p, message]);
    });
  });

  console.log("the socket", socket);
  return (
    <>
      <div className="container-md">
        <ChatThreadsContext.Provider value={threads}>
          <ChatThread />
          <CoolInput socket={socket} />
        </ChatThreadsContext.Provider>
      </div>
    </>
  );
}
