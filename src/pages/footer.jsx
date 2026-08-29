
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h2>Voice4All</h2>
          <p>
            Making communities better through citizen voices.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/home">Home</Link>
          <Link to="/complaints">Complaints</Link>
          <Link to="/help-center">Help Center</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Voice4All. All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;

