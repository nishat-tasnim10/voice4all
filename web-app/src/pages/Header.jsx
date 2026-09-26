
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";


export default function Header() {
    const navigate = useNavigate();

    const role = localStorage.getItem("role");
    const isAdmin = role === "admin";

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("role");
        navigate("/");
    };

    return (
        <header className="site-header">

            {/* Logo */}
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


            {/* Back / Forward Buttons */}
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

                {isAdmin ? (
                    <Link to="/complaints">
                        Complaints
                    </Link>
                ) : (
                    <Link to="/Home">
                        Home
                    </Link>
                )}


                {!isAdmin && (
                    <Link to="/submit">
                        Submit Complaints
                    </Link>
                )}


                {isAdmin && (
                    <Link to="/admin-dashboard">
                        Admin
                    </Link>
                )}

            </nav>


            {/* Profile / Admin / Logout */}
            <div className="header-actions">

                {isAdmin ? (
                    <button
                        type="button"
                        className="header-profile"
                        onClick={() => navigate("/profile")}
                    >
                        Admin
                    </button>
                ) : (
                    <button
                        type="button"
                        className="header-profile"
                        onClick={() => navigate("/profile")}
                    >
                        Profile
                    </button>
                )}


                <button
                    type="button"
                    className="header-logout"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </header>
    );
}
