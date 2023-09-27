import "./style.css";
import { useEffect, useState, useContext } from "react";
import clientIo from "socket.io-client";
import { ChatThreadsContext } from "../../app";

export default function ChatThread() {
  const [sockCon, setSockCon] = useState(null);
  const threads = useContext(ChatThreadsContext);
  console.log("threads ", threads);
  useEffect(() => {
    setSockCon(clientIo());
  }, []);

  return (
    <>
      <div className="t_content">
        <div className="mh-70">
          {threads.map((v, k) => (
            <div key={k}>v</div>
          ))}
        </div>
      </div>
    </>
  );
}
