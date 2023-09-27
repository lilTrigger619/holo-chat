import io from "socket.io-client";
import CoolInput from "./components/input";
import ChatThread from "./components/chatThread";
import { createContext, useState, useEffect, useReducer } from "react";

export const ChatThreadsContext = createContext(null);

/**
enum inputs {
	typing = "typing";
	
};

const l_reducer = function(state, action){
	const {payload, type} = action;
	switch(type){
		case "typing":
			return
	};
};
**/
const soc = io();
console.log("connection");
export default function App() {
  const [threads, setThreads] = useState([]);
  //const [soc, setSoc] = useState(null);
  useEffect(() => {
    soc.emit("joinRoom", "testRoom");
    console.log("the soc", soc);
  }, []);
  //soc.emit("chat message", "somethig");
  useEffect(() => {
    soc.on("recieveMessage", (message) => {
      setThreads((p) => [...p, message]);
    });
  });

  const onSubmit = (inputValue: string) => {
    soc.emit("sendMessage", inputValue);
		console.log("message sent", inputValue);
  };
  return (
    <>
      <div className="container-md">
        <ChatThreadsContext.Provider value={threads}>
          <ChatThread />
          <CoolInput onSubmit={onSubmit} />
        </ChatThreadsContext.Provider>
      </div>
    </>
  );
}
