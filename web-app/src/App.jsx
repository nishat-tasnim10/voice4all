import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import HelpCenter from "./pages/HelpCenter";
import Login from "./pages/Login";
import Submit from "./pages/submit";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import Complaints from "./pages/Complaints";

import Sidebar from "./pages/Sidebar";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";


// USER ONLY
function UserRoute({ children }) {

  const role = localStorage.getItem("role");

  if (role !== "user") {
    return <Navigate to="/AdminDashboard" replace />;
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

  // Hide Sidebar only on Login page
  const isLoginPage = location.pathname === "/";

  return (
    <>
      {!isLoginPage && <Sidebar />}

      <Routes>

        {/* Login */}
        <Route
          path="/"
          element={<Login />}
        />


        {/* Home - Both User and Admin */}
        <Route
          path="/Home"
          element={<Home />}
        />


        {/* User Dashboard - USER ONLY */}
        <Route
          path="/dashboard"
          element={
            <UserRoute>
              <Dashboard />
            </UserRoute>
          }
        />


        {/* Submit Complaint - USER ONLY */}
        <Route
          path="/submit"
          element={
            <UserRoute>
              <Submit />
            </UserRoute>
          }
        />


        {/* Complaints - Both User and Admin */}
        <Route
          path="/complaints"
          element={<Complaints />}
        />


        {/* Admin Dashboard - ADMIN ONLY */}
        <Route
          path="/admin-dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />


        {/* About Us - Both */}
        <Route
          path="/about"
          element={<AboutUs />}
        />


        {/* FAQ - Both */}
        <Route
          path="/faq"
          element={<FAQ />}
        />


        {/* Help Center - Both */}
        <Route
          path="/help-center"
          element={<HelpCenter />}
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