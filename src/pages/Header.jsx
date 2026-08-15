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
        <a href="/">Home</a>
        <a href="/complaints">Complaints</a>
        <a href="/about">About</a>
      </nav>

      {/* Profile */}
      <button className="header-profile">
        Profile
      </button>

    </header>
  );
}