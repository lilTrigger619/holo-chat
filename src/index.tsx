import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
//import "jquery/dist/jquery.min.js";
import { createRoot } from "react-dom/client";
import App from "./app";
import React from "react";

export default function Page() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const container = document.querySelector("#app");
console.log("container", container);
const root = createRoot(container);
root.render(<Page />);
