import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainlayouts from "./Layout/Mainlayouts";
import Login from "./Pages/Auth/Login";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* ga ada sidebar sama navbarnya */}
        <Route path="/" element={<Login />} />
        {/* ada side bar sama navbarnya */}
        <Route element={<Mainlayouts />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
          {/* Buat selanjutnya ya */}
        </Route>
        {/* ada side bar sama navbarnya */}
      </Routes>
    </Router>
  );
}

export default App;
