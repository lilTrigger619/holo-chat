import { io } from "../server";

export default function SocketController() {
  io.on("connection", (soc) => {
    soc.on("disconnect", () => {
      // disconnect the user
    });

    soc.on("joinRoom", (roomId) => {
      soc.join(roomId);
    });

    soc.on("sendMessage", (message, roomId) => {
      io.to(roomId).emit("recieveMessage", message);
    });
  });
}
