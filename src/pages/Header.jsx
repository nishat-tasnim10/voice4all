
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">

      {/* Voice4All Logo */}
      <Link to="/" className="header-brand">

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

      {/* Navigation */}
      <nav className="header-nav">
        <Link to="/">Home</Link>

        <Link to="/submit">
          Submit Complaints
        </Link>

        <Link to="/admin-dashboard">
          Admin
        </Link>
      </nav>

      {/* Profile */}
      <Link to="/dashboard" className="header-profile">
        Profile
      </Link>

    </header>
  );
}
