import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Mainlayouts from "./Layout/Mainlayouts";
import Login from "./Pages/Auth/Login";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminManageSatpam from "./Pages/AdminManageSatpam";
import AdminManageAdmin from "./Pages/AdminManageAdmin";
import AdminManageShift from "./Pages/AdminManageShift";
import AdminManagePos from "./Pages/AdminManagePos";
import PrivateRoute from "./Pages/Utils/PrivateRoute";
import AdminDownloadRekap from "./Pages/AdminDownloadRekap";
function App() {
  return (
    <Router>
      <Routes>
        {/* ga ada sidebar sama navbarnya */}
        <Route path="/" element={<Login />} />

        <Route element={<PrivateRoute />}>
          {/* ada side bar sama navbarnya */}
          <Route element={<Mainlayouts />}>
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/AdminManageSatpam" element={<AdminManageSatpam />} />
            <Route path="/AdminManageAdmin" element={<AdminManageAdmin />} />
            <Route path="/AdminManageShift" element={<AdminManageShift />} />
            <Route path="/AdminManagePos" element={<AdminManagePos />} />
            <Route path="/AdminDownloadRekap" element={<AdminDownloadRekap />} />
            {/* Buat selanjutnya ya */}
          </Route>
          {/* ada side bar sama navbarnya */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
