import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Submit from "./pages/submit";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import Complaints from "./pages/Complaints";
import FAQ from "./pages/FAQ";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* User pages */}
        <Route path="/submit" element={<Submit />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Admin */}
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

        {/* Prachi's pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/complaints" element={<Complaints />} />

        {/* FAQ - opened from Footer */} <Route path="/faq" element={<FAQ />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;