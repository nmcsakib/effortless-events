import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import AllEvents from "../pages/All-Events/All-Events";
import AddEvent from "../pages/Add-Events/Add-Events";
import MyEvents from "../pages/My-Events/My-Events";
import UpdateEvent from "../components/Update-event/Update-event";
import Authentication from "../pages/Authentication/Authentication";
import PrivateRoute from "./PrivateRoute";

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
        element: <PrivateRoute>
          <AllEvents />
        </PrivateRoute>
      },
      {
        path: '/Add-Events',
        element: <PrivateRoute>
          <AddEvent />
        </PrivateRoute>
      },
      {
        path: '/My-Events',
        element: <PrivateRoute>
          <MyEvents />
        </PrivateRoute>,

      },
      {
        path: '/My-Events/update/:id',
        element: <UpdateEvent />,
      },
      {
        path: '/authentication',
        element: <Authentication />
      }
    ]
  }
]);
