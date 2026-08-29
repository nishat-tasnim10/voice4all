
import "./Footer.css";

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
            <a href="/help">Help Center</a>
              <a href="/faq">FAQ</a>
              <a href="/about">About Us</a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/home">Home</a>
          <a href="/submit">Submit Complaint</a>
          <a href="/complaints">View Complaints</a>
          <a href="/dashboard">Dashboard</a>
        </div>

        {/* SERVICES */}
        <div className="footer-section">
          <h3>Services</h3>
          <a href="/submit">Complaint Submission</a>
          <a href="/complaints">My complaints</a>
          <a href="/dashboard">User Dashboard</a>
          <a href="/admin-dashboard">Admin Panel</a>
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

      <div className="footer-links">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
}