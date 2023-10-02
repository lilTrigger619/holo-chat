import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={routes} />
    </main>
  );
}
