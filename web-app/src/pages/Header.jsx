import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {

  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  const isAdmin = role === "admin";

  return (
    <header className="site-header">

      {/* Voice4All Logo */}
      <Link to="/Home" className="header-brand">

        <div className="header-brand-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="header-brand-name">
          Voice<span>4</span>All
        </div>

      </Link>


      {/* Back / Forward Navigation */}
      <div className="header-history-nav">

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="header-history-btn"
          aria-label="Go back"
        >
          ←
        </button>

        <button
          type="button"
          onClick={() => navigate(1)}
          className="header-history-btn"
          aria-label="Go forward"
        >
          →
        </button>

      </div>


      {/* Navigation */}
      <nav className="header-nav">

        <Link to="/Home">
          Home
        </Link>


        {/* USER ONLY */}
        {!isAdmin && (
          <Link to="/submit">
            Submit Complaints
          </Link>
        )}


        {/* ADMIN ONLY */}
        {isAdmin && (
          <Link to="/AdminDashboard">
            Admin
          </Link>
        )}

      </nav>


      {/* Profile / Dashboard */}

      {isAdmin ? (

        <Link
          to="/AdminDashboard"
          className="header-profile"
        >
          Admin
        </Link>

      ) : (

        <Link
          to="/dashboard"
          className="header-profile"
        >
          Profile
        </Link>

      )}

    </header>
  );
}