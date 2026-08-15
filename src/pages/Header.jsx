import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">

      {/* Voice4All Logo */}
      <a href="/" className="header-brand">

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

      </a>

      {/* Navigation */}
      <nav className="header-nav">
       <Link to="/">Home</Link>
        <Link to="/submit">Submit Complaints</Link>
        <a href="/admin">Admin</a>
      </nav>

      {/* Profile */}
      <button className="header-profile">
        Profile
      </button>

    </header>
  );
}