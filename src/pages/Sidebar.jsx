
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavigation = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Menu Button */}
            <button
                className="menu-button"
                onClick={() => setIsOpen(true)}
            >
                ☰
            </button>

            {/* Dark Overlay */}
            {isOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Left Sidebar */}
            <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>

                {/* Sidebar Header */}
                <div className="sidebar-header">
                    <h2>Voice4All</h2>

                    <button
                        className="close-button"
                        onClick={() => setIsOpen(false)}
                    >
                        ×
                    </button>
                </div>

                {/* Sidebar Menu */}
                <nav className="sidebar-menu">

                    <Link
                        to="/submit"
                        onClick={handleNavigation}
                    >
                        Submit Complaint
                    </Link>

                    <Link
                        to="/view-details"
                        onClick={handleNavigation}
                    >
                        View Details
                    </Link>

                    <Link
                        to="/dashboard"
                        onClick={handleNavigation}
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/admin-dashboard"
                        onClick={handleNavigation}
                    >
                        Admin Dashboard
                    </Link>

                    <Link
                        to="/"
                        onClick={handleNavigation}
                    >
                        Log Out
                    </Link>

                </nav>

            </aside>
        </>
    );
}

export default Sidebar;

