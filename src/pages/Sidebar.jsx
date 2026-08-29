
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* ================= MENU BUTTON ================= */}
      <button
        className="menu-button"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>

      {/* ================= OVERLAY ================= */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`sidebar ${isOpen ? "sidebar-open" : ""}`}
      >
        {/* ================= HEADER ================= */}
        <div className="sidebar-header">
          <h2>Voice4All</h2>

          <button
            className="close-button"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        {/* ================= MENU ================= */}
        <nav className="sidebar-menu">

          {/* SUBMIT COMPLAINT */}
          <Link
            to="/submit"
            onClick={handleNavigation}
          >
            Submit Complaint
          </Link>

          {/* VIEW DETAILS → COMPLAINTS PAGE */}
          <Link
            to="/complaints"
            onClick={handleNavigation}
          >
            View Details
          </Link>

          {/* DASHBOARD */}
          <Link
            to="/dashboard"
            onClick={handleNavigation}
          >
            Dashboard
          </Link>

          {/* ADMIN DASHBOARD */}
          <Link
            to="/admin-dashboard"
            onClick={handleNavigation}
          >
            Admin Dashboard
          </Link>

          {/* LOG OUT */}
          <Link
            to="/"
            onClick={handleNavigation}
          >
            Log Out
          </Link>

        </nav>
      </aside>
    </>
  );
}

export default Sidebar;

