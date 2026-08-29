import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Submit from "./pages/submit";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Complaints from "./pages/Complaints";
import ConnectUs from "./pages/ConnectUs";
import HelpCenter from "./pages/HelpCenter";
import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <BrowserRouter>

      {/* COMMON SIDEBAR */}
      <Sidebar />

      <Routes>

        {/* OPEN HOME FIRST */}
        <Route
          path="/"
          element={<Navigate to="/home" replace />}
        />

        {/* HOME */}
        <Route
          path="/home"
          element={<Home />}
        />

        {/* SUBMIT COMPLAINT */}
        <Route
          path="/submit"
          element={<Submit />}
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* COMPLAINTS */}
        <Route
          path="/complaints"
          element={<Complaints />}
        />

        {/* HELP CENTER */}
        <Route
          path="/help-center"
          element={<HelpCenter />}
        />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

        {/* CONNECT US */}
        <Route
          path="/connect-us"
          element={<ConnectUs />}
        />

        {/* UNKNOWN PAGE */}
        <Route
          path="*"
          element={<Navigate to="/home" replace />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;