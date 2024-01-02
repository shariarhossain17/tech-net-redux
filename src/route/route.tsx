import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login/Login";
import NotFound from "../page/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
