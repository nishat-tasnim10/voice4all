import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import AboutUs from "./pages/AboutUs";
import AdminDashboard from "./pages/AdminDashboard";
import Complaints from "./pages/Complaints";
import Dashboard from "./pages/Dashboard";
import FAQ from "./pages/FAQ";
import HelpCenter from "./pages/HelpCenter";
import HelpTopic from "./pages/HelpTopic";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Submit from "./pages/submit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/login" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/help-center/:topicSlug" element={<HelpTopic />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;