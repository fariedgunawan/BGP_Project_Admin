import { Link, useLocation } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { IoPersonAdd } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { GoClockFill } from "react-icons/go";
import { MdFileDownload } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", icon: <RiDashboardFill />, path: "/" },
    {
      name: "Manage Satpam",
      icon: <IoPersonAdd />,
      path: "/manage-satpam",
    },
    {
      name: "Manage Admin",
      icon: <IoMdSettings />,
      path: "/manage-admin",
    },
    { name: "Manage Pos", icon: <AiFillHome />, path: "/manage-pos" },
    { name: "Manage Shift", icon: <GoClockFill />, path: "/manage-shift" },
    {
      name: "Download Rekap",
      icon: <MdFileDownload />,
      path: "/download-rekap",
    },
  ];

  return (
    <div className="w-64 bg-white shadow-md h-screen fixed left-0 top-0 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold text-blue-800 px-6 py-4">
          PT. Bima Global
        </h1>
        <ul className="space-y-2 px-3">
          {menu.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-md hover:bg-blue-50 ${
                  location.pathname === item.path
                    ? "bg-blue-100 font-medium"
                    : ""
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <button className="flex items-center gap-2 text-red-600 px-4 py-3 hover:bg-red-50">
        <TbLogout size={18} />
        Keluar
      </button>
    </div>
  );
};

export default Sidebar;
