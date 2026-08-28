import "./Dashboard.css";
import Header from "./Header";
import Footer from "./footer";
import Submit from "./submit";

function Dashboard() {
    return (
        <>
            {/* HEADER */}
            <Header />

            <div className="dashboard">

                {/* SIDEBAR */}
                <aside className="sidebar">

                    <nav className="sidebar-nav">

                        <button
                            className="nav-btn active"
                            onClick={() =>
                                (window.location.href = "/dashboard")
                            }
                        >
                            🏠 Dashboard
                        </button>

                        <button
                            className="nav-btn"
                            onClick={() =>
                                (window.location.href = "/my-complaints")
                            }
                        >
                            📋 My Complaints
                        </button>

                        <button
                            className="nav-btn"
                            onClick={() =>

                                (window.location.href = "/my-complaints")

                            }
                        >
                            ➕ Submit Complaint
                        </button>

                        <hr />

                        <button
                            className="nav-btn"
                            onClick={() =>
                                (window.location.href = "/")
                            }
                        >
                            🚪 Logout
                        </button>

                    </nav>

                </aside>


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
                                <h2>5</h2>
                                <p>Total Complaints</p>
                            </div>

                        </div>


                        <div className="card pending">

                            <div className="card-icon">
                                🕐
                            </div>

                            <div>
                                <h2>2</h2>
                                <p>Pending</p>
                            </div>

                        </div>


                        <div className="card resolved">

                            <div className="card-icon">
                                ✓
                            </div>

                            <div>
                                <h2>3</h2>
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
                                    (window.location.href = "/my-complaints")
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

                                    <tr>

                                        <td>
                                            Road damage near school
                                        </td>

                                        <td>
                                            <span className="category road">
                                                Road
                                            </span>
                                        </td>

                                        <td>
                                            <span className="status pending-status">
                                                Pending
                                            </span>
                                        </td>

                                        <td>
                                            Aug 10
                                        </td>

                                        <td>
                                            <button
                                                className="view-btn"
                                                onClick={() =>
                                                    (window.location.href = "/my-complaints")
                                                }
                                            >
                                                View
                                            </button>
                                        </td>

                                    </tr>


                                    <tr>

                                        <td>
                                            Water leakage
                                        </td>

                                        <td>
                                            <span className="category water">
                                                Water
                                            </span>
                                        </td>

                                        <td>
                                            <span className="status progress-status">
                                                In Progress
                                            </span>
                                        </td>

                                        <td>
                                            Aug 8
                                        </td>

                                        <td>
                                            <button
                                                className="view-btn"
                                                onClick={() =>
                                                    (window.location.href = "/my-complaints")
                                                }
                                            >
                                                View
                                            </button>
                                        </td>

                                    </tr>


                                    <tr>

                                        <td>
                                            Garbage collection
                                        </td>

                                        <td>
                                            <span className="category sanitation">
                                                Sanitation
                                            </span>
                                        </td>

                                        <td>
                                            <span className="status resolved-status">
                                                Resolved
                                            </span>
                                        </td>

                                        <td>
                                            Aug 2
                                        </td>

                                        <td>
                                            <button
                                                className="view-btn"
                                                onClick={() =>
                                                    (window.location.href = "/my-complaints")
                                                }
                                            >
                                                View
                                            </button>
                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </section>


                    {/* SUBMIT BUTTON */}
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