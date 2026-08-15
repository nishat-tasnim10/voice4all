import "./Header.css";

export default function Header({ goHome, goComplaints }) {
  return (
    <header className="site-header">

      {/* LOGO */}
      <button
        className="header-brand"
        onClick={goHome}
      >
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
      </button>


      {/* NAVIGATION */}
      <nav className="header-nav">

        <button
          className="header-nav-link"
          onClick={goHome}
        >
          Home
        </button>

        <button
          className="header-nav-link"
          onClick={goComplaints}
        >
          Complaints
        </button>

        <button
          className="header-nav-link"
          onClick={() =>
            alert("About page will be added next.")
          }
        >
          About
        </button>

      </nav>


      {/* PROFILE */}
      <button
        className="header-profile"
        onClick={() =>
          alert("Profile page will be added next.")
        }
      >
        Profile
      </button>

    </header>
  );
}