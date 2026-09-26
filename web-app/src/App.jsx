import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { useEffect, useState } from "react";

import HelpCenter from "./pages/HelpCenter";
import HelpTopic from "./pages/HelpTopic";
import Login from "./pages/Login";
import Submit from "./pages/submit";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import Complaints from "./pages/Complaints";
import Profile from "./pages/Profile";
import Sidebar from "./pages/Sidebar";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";

// USER ONLY
function UserRoute({ children }) {
  const role = localStorage.getItem("role");

  if (role !== "user") {
    return <Navigate to="/admin-dashboard" replace />;
  }

  return children;
}

// ADMIN ONLY
function AdminRoute({ children }) {
  const role = localStorage.getItem("role");

  if (role !== "admin") {
    return <Navigate to="/Home" replace />;
  }

  return children;
}

function AppContent() {
  const location = useLocation();

  const [role, setRole] = useState(
    localStorage.getItem("role")
  );

  // Check role whenever the page/route changes
  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, [location.pathname]);

  const isLoginPage = location.pathname === "/";

  return (
    <>
      {/* USER SIDEBAR ONLY */}
      {!isLoginPage && role === "user" && <Sidebar />}

      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Home */}
        <Route path="/Home" element={<Home />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />

        {/* User Dashboard */}
        <Route
          path="/dashboard"
          element={
            <UserRoute>
              <Dashboard />
            </UserRoute>
          }
        />

        {/* Submit Complaint */}
        <Route
          path="/submit"
          element={
            <UserRoute>
              <Submit />
            </UserRoute>
          }
        />

        {/* Complaints */}
        <Route
          path="/complaints"
          element={<Complaints />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={<AboutUs />}
        />

        {/* FAQ */}
        <Route
          path="/faq"
          element={<FAQ />}
        />

        {/* Help Center */}
        <Route
          path="/help-center"
          element={<HelpCenter />}
        />

        {/* Help Topic */}
        <Route
          path="/help-center/:topicSlug"
          element={<HelpTopic />}
        />

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