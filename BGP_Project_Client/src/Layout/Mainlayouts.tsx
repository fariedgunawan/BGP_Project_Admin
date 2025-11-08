import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

const Mainlayouts = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Navbar />
        <div className="pt-20 px-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Mainlayouts;
