import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  { path: "tt", element: <div>Hero</div> },
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={routes} />
    </main>
  );
}
