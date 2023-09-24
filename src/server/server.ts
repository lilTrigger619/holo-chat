import dotenv from "dotenv";
dotenv.config(); // leave it here
import { port, host, mongodb_url, node_env } from "./config";
import express from "express";
const { createServer } = require("http");

const app = express();
const server = createServer(app);

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
