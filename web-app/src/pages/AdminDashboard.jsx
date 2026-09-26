import { useEffect, useMemo, useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import "./AdminDashboard.css";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

function AdminDashboard() {

    // =========================================================
    // STATE
    // =========================================================

    const [complaints, setComplaints] = useState([]);

    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);

    const complaintsPerPage = 12;

    // Top search
    const [topSearch, setTopSearch] = useState("");

    // Filter search
    const [filterSearch, setFilterSearch] = useState("");

    // Filters that are currently applied
    const [filters, setFilters] = useState({
        search: "",
        category: "All",
        status: "All",
        priority: "All",
        department: "All",
    });

    // Selected complaint for View
    const [selectedComplaint, setSelectedComplaint] = useState(null);

    // Status selected inside modal
    const [newStatus, setNewStatus] = useState("");

    // Admin profile dropdown
    const [showAdminMenu, setShowAdminMenu] = useState(false);


    // =========================================================
    // LOAD ALL COMPLAINTS
    // =========================================================

    const fetchComplaints = async () => {

        try {

            setLoading(true);

            const response = await axiosInstance.get("/admin-dashboard");

            setComplaints(response.data.complaints || []);

        } catch (error) {

            console.error("Failed to load complaints:", error);

            if (error.response?.status === 401) {
                alert("You are not logged in.");
            } else {
                alert("Failed to load complaints.");
            }

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {
        fetchComplaints();
    }, []);


    // =========================================================
    // HELPER FUNCTIONS
    // =========================================================

    const getCategory = (department) => {

        const departmentName = String(department || "").toLowerCase();

        const categoryMap = {
            roads: "Road",
            drainage: "Drainage",
            health: "Health",
            lighting: "Lighting",
            traffic: "Traffic",
            parks: "Parks",
            water: "Water",
            electricity: "Electricity",
            waste: "Waste",
        };

        return categoryMap[departmentName] ||
            departmentName.charAt(0).toUpperCase() +
            departmentName.slice(1);
    };


    const getCategoryClass = (category) => {

        if (category === "Road") {
            return "road";
        }

        if (category === "Water") {
            return "water";
        }

        if (
            category === "Waste" ||
            category === "Drainage"
        ) {
            return "sanitation";
        }

        return "";
    };


    const getStatusLabel = (status) => {

        if (status === "pending") {
            return "Open";
        }

        if (status === "in-progress") {
            return "In Progress";
        }

        if (status === "resolved") {
            return "Resolved";
        }

        return status || "Open";
    };


    const getStatusClass = (status) => {

        if (status === "pending") {
            return "open";
        }

        if (status === "in-progress") {
            return "in-progress";
        }

        if (status === "resolved") {
            return "resolved";
        }

        return "open";
    };


    const getDepartmentLabel = (department) => {

        const departmentName = String(department || "").toLowerCase();

        const departmentMap = {
            roads: "Road Department",
            drainage: "Drainage Department",
            health: "Health Department",
            lighting: "Lighting Department",
            traffic: "Traffic Department",
            parks: "Parks Department",
            water: "Water Department",
            electricity: "Electricity Department",
            waste: "Waste Department",
        };

        return departmentMap[departmentName] ||
            `${departmentName.charAt(0).toUpperCase() +
            departmentName.slice(1)} Department`;
    };


    const getDepartmentIcon = (department) => {

        const departmentName = String(department || "").toLowerCase();

        const iconMap = {
            roads: "🛣️",
            drainage: "💧",
            health: "🏥",
            lighting: "💡",
            traffic: "🚦",
            parks: "🌳",
            water: "🚰",
            electricity: "⚡",
            waste: "🗑️",
        };

        return iconMap[departmentName] || "🏢";
    };


    const getUserName = (complaint) => {

        return (
            complaint.user?.displayName ||
            complaint.user?.username ||
            "Unknown User"
        );
    };


    const getUserInitial = (complaint) => {

        const name = getUserName(complaint);

        return name.charAt(0).toUpperCase();
    };


    const formatDate = (date) => {

        if (!date) {
            return {
                date: "-",
                time: "",
            };
        }

        const d = new Date(date);

        return {
            date: d.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
            }),

            time: d.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
            }),
        };
    };


    // =========================================================
    // UNIQUE FILTER OPTIONS
    // =========================================================

    const categories = useMemo(() => {

        const values = complaints.map((complaint) =>
            getCategory(complaint.department)
        );

        return [...new Set(values)].sort();

    }, [complaints]);


    const departments = useMemo(() => {

        const values = complaints.map((complaint) =>
            complaint.department
        );

        return [...new Set(values)]
            .filter(Boolean)
            .sort();

    }, [complaints]);


    // =========================================================
    // FILTER + SEARCH + NEWEST FIRST
    // =========================================================

    const filteredComplaints = useMemo(() => {

        const result = complaints.filter((complaint) => {

            const category = getCategory(complaint.department);

            const searchText = filters.search
                .trim()
                .toLowerCase();

            const matchesSearch =
                !searchText ||
                complaint.subject?.toLowerCase().includes(searchText) ||
                complaint.description?.toLowerCase().includes(searchText) ||
                getUserName(complaint).toLowerCase().includes(searchText) ||
                complaint.department?.toLowerCase().includes(searchText);

            const matchesCategory =
                filters.category === "All" ||
                category === filters.category;

            const matchesStatus =
                filters.status === "All" ||
                complaint.status === filters.status;

            const matchesPriority =
                filters.priority === "All" ||
                complaint.priority === filters.priority;

            const matchesDepartment =
                filters.department === "All" ||
                complaint.department === filters.department;

            return (
                matchesSearch &&
                matchesCategory &&
                matchesStatus &&
                matchesPriority &&
                matchesDepartment
            );

        });

        // NEWEST COMPLAINT FIRST
        result.sort(
            (a, b) =>
                new Date(b.createdAt) -
                new Date(a.createdAt)
        );

        return result;

    }, [complaints, filters]);


    // =========================================================
    // PAGINATION
    // =========================================================

    const totalPages = Math.max(
        1,
        Math.ceil(
            filteredComplaints.length /
            complaintsPerPage
        )
    );


    const startIndex =
        (currentPage - 1) *
        complaintsPerPage;


    const currentComplaints =
        filteredComplaints.slice(
            startIndex,
            startIndex + complaintsPerPage
        );


    // =========================================================
    // STATISTICS
    // =========================================================

    const totalComplaints = complaints.length;

    const openComplaints = complaints.filter(
        (complaint) =>
            complaint.status === "pending"
    ).length;

    const inProgressComplaints = complaints.filter(
        (complaint) =>
            complaint.status === "in-progress"
    ).length;

    const resolvedComplaints = complaints.filter(
        (complaint) =>
            complaint.status === "resolved"
    ).length;


    // =========================================================
    // APPLY FILTER
    // =========================================================

    const handleApplyFilters = () => {

        setFilters({
            search: filterSearch,
            category: filters.category,
            status: filters.status,
            priority: filters.priority,
            department: filters.department,
        });

        setCurrentPage(1);
    };


    // =========================================================
    // TOP SEARCH
    // =========================================================

    const handleTopSearch = (value) => {

        setTopSearch(value);

        setFilters((previous) => ({
            ...previous,
            search: value,
        }));

        setCurrentPage(1);
    };


    // =========================================================
    // VIEW COMPLAINT
    // =========================================================

    const handleViewComplaint = (complaint) => {

        setSelectedComplaint(complaint);

        setNewStatus(complaint.status);

    };


    // =========================================================
    // CLOSE MODAL
    // =========================================================

    const closeComplaintModal = () => {

        setSelectedComplaint(null);

        setNewStatus("");

    };


    // =========================================================
    // UPDATE COMPLAINT STATUS
    // =========================================================

    const handleUpdateStatus = async () => {

        if (!selectedComplaint) {
            return;
        }

        try {

            const response =
                await axiosInstance.patch(
                    `/admin-dashboard/${selectedComplaint._id}/status`,
                    {
                        status: newStatus,
                    }
                );


            const updatedComplaint =
                response.data.complaint;


            // Update table immediately
            setComplaints((previous) =>
                previous.map((complaint) =>
                    complaint._id === updatedComplaint._id
                        ? updatedComplaint
                        : complaint
                )
            );


            // Update modal
            setSelectedComplaint(updatedComplaint);

            setNewStatus(updatedComplaint.status);


            alert(
                "Complaint status updated successfully."
            );

        } catch (error) {

            console.error(
                "Status update error:",
                error
            );

            alert(
                error.response?.data?.message ||
                "Failed to update complaint status."
            );
        }
    };


    // =========================================================
    // NOTIFICATION
    // =========================================================

    const handleNotification = () => {

        const latestPending =
            complaints
                .filter(
                    (complaint) =>
                        complaint.status === "pending"
                )
                .sort(
                    (a, b) =>
                        new Date(b.createdAt) -
                        new Date(a.createdAt)
                )[0];


        if (latestPending) {

            handleViewComplaint(latestPending);

        } else {

            alert("No new pending complaints.");

        }
    };


    // =========================================================
    // EXPORT CSV
    // =========================================================

    const handleExport = () => {

        if (filteredComplaints.length === 0) {

            alert("There are no complaints to export.");

            return;
        }


        const headers = [
            "User",
            "Complaint",
            "Category",
            "Priority",
            "Status",
            "Department",
            "Date",
        ];


        const rows = filteredComplaints.map(
            (complaint) => {

                const date =
                    formatDate(complaint.createdAt);


                return [
                    getUserName(complaint),
                    complaint.subject || "",
                    getCategory(complaint.department),
                    complaint.priority || "",
                    getStatusLabel(complaint.status),
                    getDepartmentLabel(complaint.department),
                    `${date.date} ${date.time}`,
                ];
            }
        );


        const csvContent = [
            headers,
            ...rows,
        ]
            .map((row) =>
                row
                    .map((value) =>
                        `"${String(value)
                            .replace(/"/g, '""')}"`
                    )
                    .join(",")
            )
            .join("\n");


        const blob = new Blob(
            [csvContent],
            {
                type: "text/csv;charset=utf-8;",
            }
        );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href = url;

        link.download =
            "voice4all-complaints.csv";


        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);

    };


    // =========================================================
    // PAGE NUMBERS
    // =========================================================

    const pageNumbers = [];

    if (totalPages <= 7) {

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }

    } else {

        pageNumbers.push(1);

        if (currentPage > 4) {
            pageNumbers.push("...");
        }

        const start =
            Math.max(2, currentPage - 1);

        const end =
            Math.min(
                totalPages - 1,
                currentPage + 1
            );

        for (let i = start; i <= end; i++) {
            pageNumbers.push(i);
        }

        if (currentPage < totalPages - 3) {
            pageNumbers.push("...");
        }

        pageNumbers.push(totalPages);
    }


    // =========================================================
    // CURRENT DATE
    // =========================================================

    const today = new Date();

    const todayText =
        today.toLocaleDateString(
            "en-US",
            {
                month: "short",
                day: "numeric",
                year: "numeric",
            }
        );


    // =========================================================
    // JSX
    // =========================================================

    return (
        <>

            {/* HEADER */}
            <Header />


            {/* ADMIN DASHBOARD */}
            <div className="admin-layout">


                {/* SIDEBAR */}
                <aside className="sidebar">

                    <nav className="sidebar-nav">

                        <Link
                            to="/admin-dashboard"
                            className="nav-item active"
                        >
                            <span>📊</span>
                            Dashboard
                        </Link>


                        <Link
                            to="/complaints"
                            className="nav-item"
                        >
                            <span>📋</span>
                            Complaints
                        </Link>


                        <Link
                            to="/users"
                            className="nav-item"
                        >
                            <span>👥</span>
                            Users
                        </Link>


                        <Link
                            to="/departments"
                            className="nav-item"
                        >
                            <span>🏢</span>
                            Departments
                        </Link>


                        <Link
                            to="/reports"
                            className="nav-item"
                        >
                            <span>📈</span>
                            Reports
                        </Link>

                    </nav>


                    {/* ADMIN PROFILE */}
                    


                </aside>


                {/* MAIN CONTENT */}
                <main className="main-content">


                    {/* TOP HEADER */}
                    <div className="top-header">


                        {/* WELCOME */}
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


                            {/* SEARCH */}
                            <div className="search-top">

                                <span>🔍</span>

                                <input
                                    type="text"
                                    placeholder="Search complaints..."
                                    value={topSearch}
                                    onChange={(e) =>
                                        handleTopSearch(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>


                            {/* NOTIFICATION */}
                            <button
                                className="notification"
                                onClick={handleNotification}
                                title="Latest pending complaint"
                            >

                                🔔

                                <span>
                                    {openComplaints}
                                </span>

                            </button>


                            {/* ADMIN HEADER */}
                            <div
                                className="header-admin"
                                onClick={() =>
                                    setShowAdminMenu(
                                        !showAdminMenu
                                    )
                                }
                                style={{
                                    cursor: "pointer",
                                    position: "relative",
                                }}
                            >

                               

                               


                                {/* PROFILE MENU */}
                                {showAdminMenu && (

                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "55px",
                                            right: "0",
                                            background: "#ffffff",
                                            border: "1px solid #e5e7eb",
                                            borderRadius: "8px",
                                            boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                                            width: "150px",
                                            zIndex: 1000,
                                            overflow: "hidden",
                                        }}
                                    >

                                        <button
                                            style={{
                                                width: "100%",
                                                padding: "10px 14px",
                                                border: "none",
                                                background: "white",
                                                textAlign: "left",
                                                cursor: "pointer",
                                            }}
                                            onClick={() =>
                                                alert(
                                                    "Admin Profile"
                                                )
                                            }
                                        >
                                            👤 Profile
                                        </button>


                                       

                                    </div>

                                )}

                            </div>


                            {/* DATE */}
                            <div className="date-box">

                                📅 {todayText}

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        STATISTICS
                    ================================================= */}

                    <div className="stats-grid">


                        {/* TOTAL */}
                        <div className="stat-card total">

                            <div className="stat-icon">
                                📋
                            </div>

                            <div>

                                <h3>
                                    {totalComplaints}
                                </h3>

                                <p>
                                    Total Complaints
                                </p>

                                <small>
                                    All submitted complaints
                                </small>

                            </div>

                        </div>


                        {/* OPEN */}
                        <div className="stat-card open">

                            <div className="stat-icon">
                                🔓
                            </div>

                            <div>

                                <h3>
                                    {openComplaints}
                                </h3>

                                <p>
                                    Open
                                </p>

                                <small>
                                    Awaiting action
                                </small>

                            </div>

                        </div>


                        {/* IN PROGRESS */}
                        <div className="stat-card progress">

                            <div className="stat-icon">
                                🔄
                            </div>

                            <div>

                                <h3>
                                    {inProgressComplaints}
                                </h3>

                                <p>
                                    In Progress
                                </p>

                                <small>
                                    Being handled
                                </small>

                            </div>

                        </div>


                        {/* RESOLVED */}
                        <div className="stat-card resolved">

                            <div className="stat-icon">
                                ✅
                            </div>

                            <div>

                                <h3>
                                    {resolvedComplaints}
                                </h3>

                                <p>
                                    Resolved
                                </p>

                                <small>
                                    Completed complaints
                                </small>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        FILTER
                    ================================================= */}

                    <div className="filter-card">


                        {/* SEARCH */}
                        <div className="filter-search">

                            <span>🔍</span>

                            <input
                                type="text"
                                placeholder="Search complaints..."
                                value={filterSearch}
                                onChange={(e) =>
                                    setFilterSearch(
                                        e.target.value
                                    )
                                }
                            />

                        </div>


                        {/* CATEGORY */}
                        <div className="filter-group">

                            <label>
                                Category
                            </label>

                            <select
                                value={filters.category}
                                onChange={(e) =>
                                    setFilters(
                                        (previous) => ({
                                            ...previous,
                                            category:
                                                e.target.value,
                                        })
                                    )
                                }
                            >

                                <option value="All">
                                    All Categories
                                </option>

                                {categories.map(
                                    (category) => (

                                        <option
                                            key={category}
                                            value={category}
                                        >
                                            {category}
                                        </option>

                                    )
                                )}

                            </select>

                        </div>


                        {/* STATUS */}
                        <div className="filter-group">

                            <label>
                                Status
                            </label>

                            <select
                                value={filters.status}
                                onChange={(e) =>
                                    setFilters(
                                        (previous) => ({
                                            ...previous,
                                            status:
                                                e.target.value,
                                        })
                                    )
                                }
                            >

                                <option value="All">
                                    All Status
                                </option>

                                <option value="pending">
                                    Open
                                </option>

                                <option value="in-progress">
                                    In Progress
                                </option>

                                <option value="resolved">
                                    Resolved
                                </option>

                            </select>

                        </div>


                        {/* PRIORITY */}
                        <div className="filter-group">

                            <label>
                                Priority
                            </label>

                            <select
                                value={filters.priority}
                                onChange={(e) =>
                                    setFilters(
                                        (previous) => ({
                                            ...previous,
                                            priority:
                                                e.target.value,
                                        })
                                    )
                                }
                            >

                                <option value="All">
                                    All Priority
                                </option>

                                <option value="High">
                                    High
                                </option>

                                <option value="Medium">
                                    Medium
                                </option>

                                <option value="Low">
                                    Low
                                </option>

                            </select>

                        </div>


                        {/* DEPARTMENT */}
                        <div className="filter-group">

                            <label>
                                Department
                            </label>

                            <select
                                value={filters.department}
                                onChange={(e) =>
                                    setFilters(
                                        (previous) => ({
                                            ...previous,
                                            department:
                                                e.target.value,
                                        })
                                    )
                                }
                            >

                                <option value="All">
                                    All Departments
                                </option>

                                {departments.map(
                                    (department) => (

                                        <option
                                            key={department}
                                            value={department}
                                        >
                                            {getDepartmentLabel(
                                                department
                                            )}
                                        </option>

                                    )
                                )}

                            </select>

                        </div>


                        {/* APPLY */}
                        <button
                            className="filter-button"
                            onClick={handleApplyFilters}
                        >
                            Apply
                        </button>

                    </div>


                    {/* =================================================
                        COMPLAINT TABLE
                    ================================================= */}

                    <section className="complaints-card">


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


                            {/* EXPORT */}
                            <button
                                className="export-button"
                                onClick={handleExport}
                            >
                                📥 Export
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

                                    {loading ? (

                                        <tr>

                                            <td
                                                colSpan="8"
                                                style={{
                                                    textAlign: "center",
                                                    padding: "40px",
                                                }}
                                            >
                                                Loading complaints...
                                            </td>

                                        </tr>

                                    ) : currentComplaints.length === 0 ? (

                                        <tr>

                                            <td
                                                colSpan="8"
                                                style={{
                                                    textAlign: "center",
                                                    padding: "40px",
                                                }}
                                            >
                                                No complaints found.
                                            </td>

                                        </tr>

                                    ) : (

                                        currentComplaints.map(
                                            (complaint) => {

                                                const category =
                                                    getCategory(
                                                        complaint.department
                                                    );

                                                const date =
                                                    formatDate(
                                                        complaint.createdAt
                                                    );

                                                return (

                                                    <tr
                                                        key={
                                                            complaint._id
                                                        }
                                                    >


                                                        {/* USER */}
                                                        <td>

                                                            <div className="user-cell">

                                                                <div className="user-avatar">

                                                                    {getUserInitial(
                                                                        complaint
                                                                    )}

                                                                </div>

                                                                <div>

                                                                    <strong>
                                                                        {getUserName(
                                                                            complaint
                                                                        )}
                                                                    </strong>

                                                                </div>

                                                            </div>

                                                        </td>


                                                        {/* COMPLAINT */}
                                                        <td>

                                                            <div className="complaint-name">

                                                                {complaint.subject}

                                                            </div>

                                                        </td>


                                                        {/* CATEGORY */}
                                                        <td>

                                                            <span
                                                                className={`category-badge ${getCategoryClass(
                                                                    category
                                                                )}`}
                                                            >
                                                                {category}
                                                            </span>

                                                        </td>


                                                        {/* PRIORITY */}
                                                        <td>

                                                            <span
                                                                className={`priority-badge ${String(
                                                                    complaint.priority ||
                                                                    ""
                                                                ).toLowerCase()}`}
                                                            >
                                                                {complaint.priority}
                                                            </span>

                                                        </td>


                                                        {/* STATUS */}
                                                        <td>

                                                            <span
                                                                className={`status-badge ${getStatusClass(
                                                                    complaint.status
                                                                )}`}
                                                            >
                                                                {getStatusLabel(
                                                                    complaint.status
                                                                )}
                                                            </span>

                                                        </td>


                                                        {/* DEPARTMENT */}
                                                        <td>

                                                            <div className="department-cell">

                                                                <span>
                                                                    {getDepartmentIcon(
                                                                        complaint.department
                                                                    )}
                                                                </span>

                                                                {getDepartmentLabel(
                                                                    complaint.department
                                                                )}

                                                            </div>

                                                        </td>


                                                        {/* DATE */}
                                                        <td>

                                                            <div className="date-cell">

                                                                <strong>
                                                                    {date.date}
                                                                </strong>

                                                                <small>
                                                                    {date.time}
                                                                </small>

                                                            </div>

                                                        </td>


                                                        {/* ACTION */}
                                                        <td>

                                                            <button
                                                                className="view-button"
                                                                onClick={() =>
                                                                    handleViewComplaint(
                                                                        complaint
                                                                    )
                                                                }
                                                            >
                                                                View
                                                            </button>

                                                        </td>

                                                    </tr>

                                                );

                                            }
                                        )

                                    )}

                                </tbody>

                            </table>

                        </div>


                        {/* =================================================
                            PAGINATION
                        ================================================= */}

                        <div className="pagination">

                            <p>

                                Showing{" "}

                                {filteredComplaints.length === 0
                                    ? 0
                                    : startIndex + 1}

                                {"–"}

                                {Math.min(
                                    startIndex +
                                    complaintsPerPage,
                                    filteredComplaints.length
                                )}

                                {" "}of{" "}

                                {filteredComplaints.length}

                                {" "}complaints

                            </p>


                            <div className="page-buttons">


                                {/* PREVIOUS */}
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => {

                                        if (currentPage > 1) {

                                            setCurrentPage(
                                                currentPage - 1
                                            );

                                        }

                                    }}
                                >
                                    ‹
                                </button>


                                {/* PAGE NUMBERS */}
                                {pageNumbers.map(
                                    (page, index) => (

                                        <button
                                            key={`${page}-${index}`}
                                            className={
                                                page === currentPage
                                                    ? "selected"
                                                    : ""
                                            }
                                            disabled={
                                                page === "..."
                                            }
                                            onClick={() => {

                                                if (
                                                    page !==
                                                    "..."
                                                ) {

                                                    setCurrentPage(
                                                        page
                                                    );

                                                }

                                            }}
                                        >
                                            {page}
                                        </button>

                                    )
                                )}


                                {/* NEXT */}
                                <button
                                    disabled={
                                        currentPage ===
                                        totalPages
                                    }
                                    onClick={() => {

                                        if (
                                            currentPage <
                                            totalPages
                                        ) {

                                            setCurrentPage(
                                                currentPage + 1
                                            );

                                        }

                                    }}
                                >
                                    ›
                                </button>

                            </div>

                        </div>

                    </section>


                    {/* FOOTER */}
                    <Footer />

                </main>

            </div>


            {/* =========================================================
                VIEW COMPLAINT MODAL
            ========================================================= */}

            {selectedComplaint && (

                <div
                    onClick={closeComplaintModal}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background:
                            "rgba(0,0,0,0.45)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 2000,
                        padding: "20px",
                    }}
                >

                    <div
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                        style={{
                            background: "#ffffff",
                            width: "100%",
                            maxWidth: "650px",
                            maxHeight: "90vh",
                            overflowY: "auto",
                            borderRadius: "12px",
                            padding: "25px",
                            boxShadow:
                                "0 20px 50px rgba(0,0,0,0.2)",
                        }}
                    >

                        {/* MODAL HEADER */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent:
                                    "space-between",
                                alignItems: "center",
                                marginBottom: "20px",
                            }}
                        >

                            <div>

                                <h2
                                    style={{
                                        margin: 0,
                                        color: "#0b1f3a",
                                    }}
                                >
                                    Complaint Details
                                </h2>

                                <p
                                    style={{
                                        marginTop: "5px",
                                        color: "#64748b",
                                    }}
                                >
                                    View and manage this complaint.
                                </p>

                            </div>


                            <button
                                onClick={
                                    closeComplaintModal
                                }
                                style={{
                                    border: "none",
                                    background: "transparent",
                                    fontSize: "25px",
                                    cursor: "pointer",
                                }}
                            >
                                ×
                            </button>

                        </div>


                        {/* SUBJECT */}
                        <div
                            style={{
                                marginBottom: "18px",
                            }}
                        >

                            <strong>
                                Complaint
                            </strong>

                            <h3
                                style={{
                                    marginTop: "5px",
                                    color: "#0b1f3a",
                                }}
                            >
                                {selectedComplaint.subject}
                            </h3>

                        </div>


                        {/* DETAILS GRID */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(2, 1fr)",
                                gap: "15px",
                                marginBottom: "20px",
                            }}
                        >

                            <div>

                                <strong>
                                    User
                                </strong>

                                <p>
                                    {getUserName(
                                        selectedComplaint
                                    )}
                                </p>

                            </div>


                            <div>

                                <strong>
                                    Category
                                </strong>

                                <p>
                                    {getCategory(
                                        selectedComplaint.department
                                    )}
                                </p>

                            </div>


                            <div>

                                <strong>
                                    Priority
                                </strong>

                                <p>
                                    {selectedComplaint.priority}
                                </p>

                            </div>


                            <div>

                                <strong>
                                    Department
                                </strong>

                                <p>
                                    {getDepartmentLabel(
                                        selectedComplaint.department
                                    )}
                                </p>

                            </div>


                            <div>

                                <strong>
                                    Date
                                </strong>

                                <p>
                                    {formatDate(
                                        selectedComplaint.createdAt
                                    ).date}{" "}
                                    {formatDate(
                                        selectedComplaint.createdAt
                                    ).time}
                                </p>

                            </div>


                            <div>

                                <strong>
                                    Current Status
                                </strong>

                                <p>
                                    {getStatusLabel(
                                        selectedComplaint.status
                                    )}
                                </p>

                            </div>

                        </div>


                        {/* DESCRIPTION */}
                        <div
                            style={{
                                marginBottom: "20px",
                            }}
                        >

                            <strong>
                                Description
                            </strong>

                            <p
                                style={{
                                    background: "#f8fafc",
                                    padding: "15px",
                                    borderRadius: "8px",
                                    lineHeight: "1.6",
                                    marginTop: "8px",
                                }}
                            >
                                {selectedComplaint.description}
                            </p>

                        </div>


                        {/* IMAGE */}
                        {selectedComplaint.image && (

                            <div
                                style={{
                                    marginBottom: "20px",
                                }}
                            >

                                <strong>
                                    Attached Image
                                </strong>

                                <img
                                    src={
                                        selectedComplaint.image
                                    }
                                    alt="Complaint"
                                    style={{
                                        display: "block",
                                        width: "100%",
                                        maxHeight: "300px",
                                        objectFit: "contain",
                                        marginTop: "10px",
                                        borderRadius: "8px",
                                    }}
                                />

                            </div>

                        )}


                        {/* STATUS UPDATE */}
                        <div
                            style={{
                                borderTop:
                                    "1px solid #e5e7eb",
                                paddingTop: "20px",
                            }}
                        >

                            <strong>
                                Update Status
                            </strong>


                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    marginTop: "10px",
                                }}
                            >

                                <select
                                    value={newStatus}
                                    onChange={(e) =>
                                        setNewStatus(
                                            e.target.value
                                        )
                                    }
                                    style={{
                                        flex: 1,
                                        padding: "10px",
                                        border:
                                            "1px solid #d1d5db",
                                        borderRadius: "6px",
                                    }}
                                >

                                    <option value="pending">
                                        Open
                                    </option>

                                    <option value="in-progress">
                                        In Progress
                                    </option>

                                    <option value="resolved">
                                        Resolved
                                    </option>

                                </select>


                                <button
                                    onClick={
                                        handleUpdateStatus
                                    }
                                    style={{
                                        background:
                                            "#0d9488",
                                        color: "white",
                                        border: "none",
                                        padding:
                                            "10px 18px",
                                        borderRadius: "6px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Update
                                </button>

                            </div>

                        </div>


                        {/* CLOSE */}
                        <button
                            onClick={
                                closeComplaintModal
                            }
                            style={{
                                width: "100%",
                                marginTop: "15px",
                                padding: "10px",
                                background: "#f1f5f9",
                                color: "#334155",
                                border: "none",
                                borderRadius: "6px",
                                cursor: "pointer",
                            }}
                        >
                            Close
                        </button>

                    </div>

                </div>

            )}

        </>
    );
}

export default AdminDashboard;