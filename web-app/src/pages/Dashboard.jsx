import { useEffect, useState } from "react";
import "./Dashboard.css";
import Header from "./Header";
import Footer from "./footer";
import Sidebar from "./Sidebar";

import axiosInstance from "../utils/axiosInstance";

function Dashboard() {
    const [dashboardData, setDashboardData] = useState({
        totalComplaints: 0,
        pendingComplaints: 0,
        resolvedComplaints: 0,
        recentComplaints: [],
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await axiosInstance.get("/dashboard");

                setDashboardData(response.data);
            } catch (error) {
                console.error("Dashboard Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    const getStatusClass = (status) => {
        if (status === "pending") {
            return "pending-status";
        }

        if (status === "resolved") {
            return "resolved-status";
        }

        return "progress-status";
    };

    const getStatusText = (status) => {
        if (status === "pending") {
            return "Pending";
        }

        if (status === "resolved") {
            return "Resolved";
        }

        return "In Progress";
    };

    return (
        <>
            {/* HEADER */}
            <Header />

            {/* SIDEBAR + MAIN CONTENT */}
            <div className="dashboard">

                {/* SIDEBAR */}
                <Sidebar />

                {/* MAIN CONTENT */}
                <main className="main">

                    {/* WELCOME */}
                    <div className="dashboard-welcome">
                        <h1>
                            Welcome back! 👋
                        </h1>

                        <p>
                            Track and manage your submitted complaints.
                        </p>
                    </div>

                    {/* STATISTICS */}
                    <section className="stats">

                        <div className="card total">
                            <div className="card-icon">
                                📋
                            </div>

                            <div>
                                <h2>
                                    {loading
                                        ? "..."
                                        : dashboardData.totalComplaints}
                                </h2>

                                <p>Total Complaints</p>
                            </div>
                        </div>

                        <div className="card pending">
                            <div className="card-icon">
                                🕐
                            </div>

                            <div>
                                <h2>
                                    {loading
                                        ? "..."
                                        : dashboardData.pendingComplaints}
                                </h2>

                                <p>Pending</p>
                            </div>
                        </div>

                        <div className="card resolved">
                            <div className="card-icon">
                                ✓
                            </div>

                            <div>
                                <h2>
                                    {loading
                                        ? "..."
                                        : dashboardData.resolvedComplaints}
                                </h2>

                                <p>Resolved</p>
                            </div>
                        </div>

                    </section>

                    {/* RECENT COMPLAINTS */}
                    <section className="complaint-box">

                        <div className="box-header">

                            <h2>
                                My Recent Complaints
                            </h2>

                            <span
                                onClick={() =>
                                    (window.location.href = "/complaints")
                                }
                            >
                                View all
                            </span>

                        </div>

                        <div className="table-container">

                            <table>

                                <thead>
                                    <tr>
                                        <th>Complaint</th>
                                        <th>Category</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {loading ? (
                                        <tr>
                                            <td colSpan="5">
                                                Loading complaints...
                                            </td>
                                        </tr>
                                    ) : dashboardData.recentComplaints.length === 0 ? (
                                        <tr>
                                            <td colSpan="5">
                                                No complaints found.
                                            </td>
                                        </tr>
                                    ) : (
                                        dashboardData.recentComplaints.map((complaint) => (
                                            <tr key={complaint._id}>

                                                <td>
                                                    {complaint.subject}
                                                </td>

                                                <td>
                                                    <span className="category road">
                                                        {complaint.department}
                                                    </span>
                                                </td>

                                                <td>
                                                    <span
                                                        className={`status ${getStatusClass(
                                                            complaint.status
                                                        )}`}
                                                    >
                                                        {getStatusText(
                                                            complaint.status
                                                        )}
                                                    </span>
                                                </td>

                                                <td>
                                                    {new Date(
                                                        complaint.createdAt
                                                    ).toLocaleDateString()}
                                                </td>

                                                <td>
                                                    <button
                                                        className="view-btn"
                                                        onClick={() =>
                                                            (window.location.href =
                                                                "/complaints")
                                                        }
                                                    >
                                                        View
                                                    </button>
                                                </td>

                                            </tr>
                                        ))
                                    )}

                                </tbody>

                            </table>

                        </div>

                    </section>

                    {/* SUBMIT BUTTON */}
                    <div className="submit-area">

                        <button
                            id="submitBtn"
                            onClick={() =>
                                (window.location.href = "/submit")
                            }
                        >
                            ＋ Submit New Complaint
                        </button>

                    </div>

                </main>

            </div>

            {/* FOOTER */}
            <Footer />

        </>
    );
}

export default Dashboard;