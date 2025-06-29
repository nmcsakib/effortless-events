import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import AllEvents from "../pages/All-Events/All-Events";
import AddEvent from "../pages/Add-Events/Add-Events";
import MyEvents from "../pages/My-Events/My-Events";
import UpdateEvent from "../components/Update-event/Update-event";
import Authentication from "../pages/Authentication/Authentication";

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
      },
      {
        path: '/Add-Events',
        element: <AddEvent/>
      },
      {
        path: '/My-Events',
        element: <MyEvents/>,
       
      },
      {
            path: '/My-Events/update',
            element: <UpdateEvent/>
          },
      {
            path: '/authentication',
            element: <Authentication/>
          }
    ]
  }
]);
