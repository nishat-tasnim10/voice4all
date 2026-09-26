import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* BRAND / ABOUT */}
        <div className="footer-section footer-about">
          <h2>
            Voice<span>4</span>All
          </h2>
          <p>
            A platform that gives everyone a voice. Submit complaints, stay
            connected, and help build a more inclusive community.
          </p>
          
          <div className="footer-socials">
            <Link to="/help">Help Center</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/about">About Us</Link>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/home">Home</Link>
          <Link to="/submit">Submit Complaint</Link>
          <Link to="/complaints">View Complaints</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

        {/* SERVICES */}
        <div className="footer-section">
          <h3>Services</h3>
          <Link to="/submit">Complaint Submission</Link>
          <Link to="/complaints">My complaints</Link>
          <Link to="/dashboard">User Dashboard</Link>
          <Link to="/admin-dashboard">Admin Panel</Link>
        </div>

        {/* CONTACT */}
        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p>📍 Dhaka, Bangladesh</p>
          <p>📧 support@voice4all.com</p>
          <p>☎ +880 1XXX-XXXXXX</p>
          <p>🕒 Available 24/7</p>
        </div>
      </div>

      <nav className="footer-links" aria-label="Legal and contact links">
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </footer>
  );
}