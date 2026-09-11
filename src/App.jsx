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

import Sidebar from "./pages/Sidebar";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";

function AppContent() {
  const location = useLocation();

  // Hide Sidebar only on Login page
  const isLoginPage = location.pathname === "/";

  return (
    <>
      {!isLoginPage && <Sidebar />}

      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Home */}
        <Route path="/home" element={<Home />} />

        {/* User pages */}
        <Route path="/submit" element={<Submit />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Complaints */}
        <Route path="/complaints" element={<Complaints />} />

        {/* Admin */}
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

        {/* About Us */}
        <Route path="/about" element={<AboutUs />} />

        {/* FAQ */}
        <Route path="/faq" element={<FAQ />} />
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