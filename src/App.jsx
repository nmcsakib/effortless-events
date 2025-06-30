import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
  import { ToastContainer } from 'react-toastify';
const App = () => {
  const location = useLocation()
  return (
    <div className={`bg-gradient-to-br from-gray-900/90 to-gray-700 ${ location.pathname !== '/' && 'pb-10'}`}>
      {
        location.pathname !== '/' && <Navbar/> 
      }
      <Outlet />
      <ToastContainer/>
    </div>
  );
};

export default App;
