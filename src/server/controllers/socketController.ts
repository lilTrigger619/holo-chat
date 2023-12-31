
import type {Request, Response} from "express";
import { io } from "../server";

function SocketController(req:Request, res:Response, next) {
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
	next();
}

module.exports=  SocketController;
