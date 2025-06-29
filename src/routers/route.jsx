import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import AllEvents from "../All-Events/All-Events";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/Events',
        element: <AllEvents/>
      }
    ]
  }
]);
