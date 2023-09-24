import "bootstrap/dist/css/bootstrap.css";
import { createRoot } from "react-dom/client";
import App from "./app";

export default function Page() {
  return (
    <>
			<App/>
    </>
  );
}

const container = document.querySelector("#app");
console.log("container", container);
const root = createRoot(container);
root.render(<Page/>);
