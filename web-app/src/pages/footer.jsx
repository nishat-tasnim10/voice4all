
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {

  const role = localStorage.getItem("role");

  const isAdmin = role === "admin";

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

            <Link to="/help-center">
              Help Center
            </Link>

            <Link to="/faq">
              FAQ
            </Link>

            <Link to="/about">
              About Us
            </Link>

          </div>

        </div>


        {/* QUICK LINKS */}
        <div className="footer-section">

          <h3>Quick Links</h3>

          {/* USER ONLY */}
          {!isAdmin && (
            <Link to="/Home">
              Home
            </Link>
          )}

          {/* USER ONLY */}
          {!isAdmin && (
            <Link to="/submit">
              Submit Complaint
            </Link>
          )}

          <Link to="/complaints">
            {isAdmin ? "All Complaints" : "View Complaints"}
          </Link>

          {/* USER ONLY */}
          {!isAdmin && (
            <Link to="/dashboard">
              Dashboard
            </Link>
          )}

          {/* ADMIN ONLY */}
          {isAdmin && (
            <Link to="/admin-dashboard">
              Admin Dashboard
            </Link>
          )}

        </div>


        {/* SERVICES */}
        <div className="footer-section">

          <h3>Services</h3>

          {/* USER ONLY */}
          {!isAdmin && (
            <Link to="/submit">
              Complaint Submission
            </Link>
          )}

          <Link to="/complaints">
            {isAdmin ? "All Complaints" : "My Complaints"}
          </Link>

          {/* USER ONLY */}
          {!isAdmin && (
            <Link to="/dashboard">
              User Dashboard
            </Link>
          )}

          {/* ADMIN ONLY */}
          {isAdmin && (
            <Link to="/admin-dashboard">
              Admin Panel
            </Link>
          )}

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

    </footer>
  );
}
