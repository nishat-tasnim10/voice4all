
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Login from "./pages/Login";
import Submit from "./pages/submit";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import Complaints from "./pages/Complaints";
<<<<<<< HEAD
import Sidebar from "./pages/Sidebar";
import AboutUs from "./pages/AboutUs";

function AppContent() {
  const location = useLocation();

  // Hide Sidebar only on Login page
  const isLoginPage = location.pathname === "/";
=======
import FAQ from "./pages/FAQ";


>>>>>>> origin/Arpan

  return (
    <>
      {!isLoginPage && <Sidebar />}

      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />
        <Route path="/connect-us" element={<AboutUs/>} />

        {/* Home */}
        <Route path="/home" element={<Home />} />

        {/* User pages */}
        <Route path="/submit" element={<Submit />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Admin */}
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

<<<<<<< HEAD
        {/* Complaints */}
        <Route
          path="/complaints"
          element={<Complaints />}
        />
=======
        {/* Prachi's pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/complaints" element={<Complaints />} />

        {/* FAQ - opened from Footer */} <Route path="/faq" element={<FAQ />} />

>>>>>>> origin/Arpan
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

