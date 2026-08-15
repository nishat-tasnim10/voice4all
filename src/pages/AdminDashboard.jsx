import Header from "./Header";
import Footer from "./footer";
import "./AdminDashboard.css";
import { Link } from "react-router-dom";

function AdminDashboard() {
    return (
        <>
            {/* TEAMMATE HEADER */}
            <Header />


            {/* ADMIN DASHBOARD */}
            <div className="admin-layout">


                {/* =========================
                    SIDEBAR
                ========================= */}

                <aside className="sidebar">

                    <nav className="sidebar-nav">

                        {/* DASHBOARD */}
                        <Link
                            to="/admin-dashboard"
                            className="nav-item active"
                        >
                            <span>📊</span>
                            Dashboard
                        </Link>


                        {/* COMPLAINTS */}
                        <Link
                            to="/complaints"
                            className="nav-item"
                        >
                            <span>📋</span>
                            Complaints
                        </Link>


                        {/* USERS */}
                        <Link
                            to="/users"
                            className="nav-item"
                        >
                            <span>👥</span>
                            Users
                        </Link>


                        {/* DEPARTMENTS */}
                        <Link
                            to="/departments"
                            className="nav-item"
                        >
                            <span>🏢</span>
                            Departments
                        </Link>


                        {/* REPORTS */}
                        <Link
                            to="/reports"
                            className="nav-item"
                        >
                            <span>📈</span>
                            Reports
                        </Link>

                    </nav>


                    {/* SIDEBAR BOTTOM */}

                    <div className="sidebar-bottom">

                        <div className="admin-profile">

                            <div className="avatar small">
                                A
                            </div>


                            <div>

                                <strong>
                                    Admin
                                </strong>

                                <small>
                                    Administrator
                                </small>

                            </div>

                        </div>


                        {/* LOGOUT */}
                        <Link
                            to="/dashboard"
                            className="nav-item logout"
                        >
                            <span>🚪</span>
                            Logout
                        </Link>

                    </div>

                </aside>


                {/* =========================
                    MAIN CONTENT
                ========================= */}

                <main className="main-content">


                    {/* TOP SECTION */}

                    <div className="top-header">

                        <div className="welcome-section">

                            <h1>
                                Admin Dashboard 👋
                            </h1>

                            <p>
                                Monitor and manage all complaints.
                            </p>

                        </div>


                        {/* HEADER ACTIONS */}

                        <div className="header-actions">

                            <div className="search-top">

                                <span>
                                    🔍
                                </span>

                                <input
                                    type="text"
                                    placeholder="Search..."
                                />

                            </div>


                            <button className="notification">
                                🔔

                                <span>
                                    3
                                </span>

                            </button>


                            <div className="header-admin">

                                <div className="avatar">
                                    A
                                </div>


                                <div>

                                    <strong>
                                        Admin
                                    </strong>

                                    <small>
                                        Administrator
                                    </small>

                                </div>


                                <span>
                                    ⌄
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* =========================
                        DATE
                    ========================= */}

                    <div className="date-box">

                        <span>
                            📅
                        </span>

                        <span>
                            August 15, 2026
                        </span>

                    </div>


                    {/* =========================
                        STATISTICS
                    ========================= */}

                    <section className="stats-grid">


                        {/* TOTAL */}

                        <div className="stat-card total">

                            <div className="stat-icon">
                                📋
                            </div>


                            <div>

                                <p>
                                    Total Complaints
                                </p>

                                <h2>
                                    124
                                </h2>

                                <small>

                                    <span className="positive">
                                        ↑ 12%
                                    </span>

                                    {" "}from last month

                                </small>

                            </div>

                        </div>


                        {/* OPEN */}

                        <div className="stat-card open">

                            <div className="stat-icon">
                                !
                            </div>


                            <div>

                                <p>
                                    Open Complaints
                                </p>

                                <h2>
                                    32
                                </h2>

                                <small>

                                    <span className="red-text">
                                        8 new
                                    </span>

                                    {" "}this week

                                </small>

                            </div>

                        </div>


                        {/* IN PROGRESS */}

                        <div className="stat-card progress">

                            <div className="stat-icon">
                                🕐
                            </div>


                            <div>

                                <p>
                                    In Progress
                                </p>

                                <h2>
                                    45
                                </h2>

                                <small>

                                    <span className="orange-text">
                                        6 pending
                                    </span>

                                    {" "}review

                                </small>

                            </div>

                        </div>


                        {/* RESOLVED */}

                        <div className="stat-card resolved">

                            <div className="stat-icon">
                                ✓
                            </div>


                            <div>

                                <p>
                                    Resolved
                                </p>

                                <h2>
                                    47
                                </h2>

                                <small>

                                    <span className="green-text">
                                        ↑ 18%
                                    </span>

                                    {" "}resolution rate

                                </small>

                            </div>

                        </div>

                    </section>


                    {/* =========================
                        FILTERS
                    ========================= */}

                    <section className="filter-card">

                        {/* SEARCH */}

                        <div className="filter-search">

                            <span>
                                🔍
                            </span>

                            <input
                                type="text"
                                placeholder="Search complaints..."
                            />

                        </div>


                        {/* CATEGORY */}

                        <div className="filter-group">

                            <label>
                                Category
                            </label>

                            <select>

                                <option>
                                    All Categories
                                </option>

                                <option>
                                    Road
                                </option>

                                <option>
                                    Water
                                </option>

                                <option>
                                    Sanitation
                                </option>

                                <option>
                                    Electricity
                                </option>

                            </select>

                        </div>


                        {/* STATUS */}

                        <div className="filter-group">

                            <label>
                                Status
                            </label>

                            <select>

                                <option>
                                    All Status
                                </option>

                                <option>
                                    Open
                                </option>

                                <option>
                                    In Progress
                                </option>

                                <option>
                                    Resolved
                                </option>

                            </select>

                        </div>


                        {/* PRIORITY */}

                        <div className="filter-group">

                            <label>
                                Priority
                            </label>

                            <select>

                                <option>
                                    All Priorities
                                </option>

                                <option>
                                    High
                                </option>

                                <option>
                                    Medium
                                </option>

                                <option>
                                    Low
                                </option>

                            </select>

                        </div>


                        {/* DEPARTMENT */}

                        <div className="filter-group">

                            <label>
                                Department
                            </label>

                            <select>

                                <option>
                                    All Departments
                                </option>

                                <option>
                                    Road Department
                                </option>

                                <option>
                                    Water Department
                                </option>

                                <option>
                                    Sanitation
                                </option>

                            </select>

                        </div>


                        <button className="filter-button">
                            Apply
                        </button>

                    </section>


                    {/* =========================
                        COMPLAINTS
                    ========================= */}

                    <section
                        className="complaints-card"
                        id="complaints"
                    >


                        {/* TABLE HEADER */}

                        <div className="table-header">

                            <div>

                                <h2>
                                    Recent Complaints
                                </h2>

                                <p>
                                    Manage and monitor submitted complaints.
                                </p>

                            </div>


                            <button className="export-button">
                                ⬇ Export
                            </button>

                        </div>


                        {/* TABLE */}

                        <div className="table-wrapper">

                            <table>

                                <thead>

                                    <tr>

                                        <th>
                                            User
                                        </th>

                                        <th>
                                            Complaint
                                        </th>

                                        <th>
                                            Category
                                        </th>

                                        <th>
                                            Priority
                                        </th>

                                        <th>
                                            Status
                                        </th>

                                        <th>
                                            Department
                                        </th>

                                        <th>
                                            Date
                                        </th>

                                        <th>
                                            Action
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>


                                    {/* ROW 1 */}

                                    <tr>

                                        <td>

                                            <div className="user-cell">

                                                <div className="user-avatar">
                                                    A
                                                </div>

                                                <strong>
                                                    Arpan Das
                                                </strong>

                                            </div>

                                        </td>


                                        <td>

                                            <div className="complaint-name">
                                                Road damage near school
                                            </div>

                                        </td>


                                        <td>

                                            <span className="category-badge road">
                                                Road
                                            </span>

                                        </td>


                                        <td>

                                            <span className="priority-badge high">
                                                High
                                            </span>

                                        </td>


                                        <td>

                                            <span className="status-badge open">
                                                Open
                                            </span>

                                        </td>


                                        <td>

                                            <div className="department-cell">
                                                🛣️ Road Department
                                            </div>

                                        </td>


                                        <td>

                                            <div className="date-cell">

                                                Aug 10

                                                <small>
                                                    10:30 AM
                                                </small>

                                            </div>

                                        </td>


                                        <td>

                                            <button className="view-button">
                                                View
                                            </button>

                                        </td>

                                    </tr>


                                    {/* ROW 2 */}

                                    <tr>

                                        <td>

                                            <div className="user-cell">

                                                <div className="user-avatar">
                                                    S
                                                </div>

                                                <strong>
                                                    Sara Ahmed
                                                </strong>

                                            </div>

                                        </td>


                                        <td>

                                            <div className="complaint-name">
                                                Water leakage
                                            </div>

                                        </td>


                                        <td>

                                            <span className="category-badge water">
                                                Water
                                            </span>

                                        </td>


                                        <td>

                                            <span className="priority-badge medium">
                                                Medium
                                            </span>

                                        </td>


                                        <td>

                                            <span className="status-badge in-progress">
                                                In Progress
                                            </span>

                                        </td>


                                        <td>

                                            <div className="department-cell">
                                                💧 Water Department
                                            </div>

                                        </td>


                                        <td>

                                            <div className="date-cell">

                                                Aug 8

                                                <small>
                                                    02:15 PM
                                                </small>

                                            </div>

                                        </td>


                                        <td>

                                            <button className="view-button">
                                                View
                                            </button>

                                        </td>

                                    </tr>


                                    {/* ROW 3 */}

                                    <tr>

                                        <td>

                                            <div className="user-cell">

                                                <div className="user-avatar">
                                                    R
                                                </div>

                                                <strong>
                                                    Rahim Khan
                                                </strong>

                                            </div>

                                        </td>


                                        <td>

                                            <div className="complaint-name">
                                                Garbage collection issue
                                            </div>

                                        </td>


                                        <td>

                                            <span className="category-badge sanitation">
                                                Sanitation
                                            </span>

                                        </td>


                                        <td>

                                            <span className="priority-badge low">
                                                Low
                                            </span>

                                        </td>


                                        <td>

                                            <span className="status-badge resolved">
                                                Resolved
                                            </span>

                                        </td>


                                        <td>

                                            <div className="department-cell">
                                                🗑️ Sanitation
                                            </div>

                                        </td>


                                        <td>

                                            <div className="date-cell">

                                                Aug 2

                                                <small>
                                                    09:20 AM
                                                </small>

                                            </div>

                                        </td>


                                        <td>

                                            <button className="view-button">
                                                View
                                            </button>

                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>


                        {/* PAGINATION */}

                        <div className="pagination">

                            <p>
                                Showing 1–3 of 124 complaints
                            </p>


                            <div className="page-buttons">

                                <button>
                                    ‹
                                </button>

                                <button className="selected">
                                    1
                                </button>

                                <button>
                                    2
                                </button>

                                <button>
                                    3
                                </button>

                                <button>
                                    4
                                </button>

                                <button>
                                    ›
                                </button>

                            </div>

                        </div>

                    </section>


                    {/* FOOTER */}

                    <Footer />

                </main>

            </div>
        </>
    );
}

export default AdminDashboard;