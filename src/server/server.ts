import dotenv from "dotenv";
dotenv.config(); // leave it here
import { port, host } from "./config";
import express from "express";
import { Server as ChatServer } from "socket.io";
import cors from "cors";
const { createServer } = require("http");

export const app = express();
app.use(cors({ origin: "*" }));
const server = createServer(app);
export const io = new ChatServer(server);

const socketController = require("./controllers/socketController");
app.use(socketController);


app.set("view engine", "ejs");
app.use(express.static("./dist"));

app.get("/", (req, res) => {
  const context = "Loading...";
  res.render("index", {
    context,
  });
});

server.listen(port, host, () => {
  console.info("Express server is listening on http://" + host + ":" + port);
});
