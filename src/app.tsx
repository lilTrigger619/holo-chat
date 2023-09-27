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
let render = 0;
let messageCount = 0;
export default function App() {
  const [threads, setThreads] = useState([]);
	const [rec, setRec] = useState([]);
	console.log("threads,,,", threads);
  //const [soc, setSoc] = useState(null);
  useEffect(() => {
    soc.emit("joinRoom", "testRoom");
    //console.log("room joined", soc);
  }, []);
  //soc.emit("chat message", "somethig");
  useEffect(() => {
    soc.on("recieveMessage", (message) => {
			console.log("count ", messageCount++);
			setRec(message);
    });
		console.log("re-render ", render++);
  });

	useEffect(()=>{
		if(rec){
			
			console.log("message recieved bla", rec);
			
      setThreads((p) => [...p, rec]);
			};
			return ()=>setRec(false);
	}, [rec]);

  const onSubmit = (inputValue: string) => {
    soc.emit("sendMessage", inputValue, "testRoom");
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
