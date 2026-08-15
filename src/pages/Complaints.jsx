import { useState } from "react";
import Header from "./Header";
import "./Complaints.css";

function Complaints({ goHome, goComplaints }) {
  const [filter, setFilter] = useState("All");

  const complaints = [
    {
      id: "#V4A-9821",
      title: "Major Water Leak on Main St.",
      description:
        "Water is gushing from a broken pipe near the intersection, causing minor flooding on the sidewalk.",
      date: "Oct 24, 2023",
      status: "In Progress",
      icon: "💧",
      color: "blue",
    },
    {
      id: "#V4A-9845",
      title: "Missed Garbage Collection",
      description:
        "The entire block of Elm Street was missed during yesterday's scheduled sanitation pickup.",
      date: "Oct 26, 2023",
      status: "Pending",
      icon: "🗑️",
      color: "orange",
    },
    {
      id: "#V4A-9871",
      title: "Large Pothole Near School",
      description:
        "A large pothole near the school entrance is creating a hazard for vehicles and pedestrians.",
      date: "Oct 28, 2023",
      status: "In Progress",
      icon: "🛣️",
      color: "purple",
    },
    {
      id: "#V4A-9892",
      title: "Electricity Problem",
      description:
        "Several streetlights are not working and an electrical line appears damaged.",
      date: "Oct 29, 2023",
      status: "Pending",
      icon: "⚡",
      color: "red",
    },
    {
      id: "#V4A-9904",
      title: "Blocked Drainage",
      description:
        "A blocked roadside drain was causing wastewater and poor sanitation conditions.",
      date: "Oct 30, 2023",
      status: "Resolved",
      icon: "🧹",
      color: "green",
    },
  ];

  const filteredComplaints =
    filter === "All"
      ? complaints
      : complaints.filter((item) => item.status === filter);

  return (
    <div className="complaints-page">

      {/* HEADER */}
      <Header
        goHome={goHome}
        goComplaints={goComplaints}
      />

      {/* MAIN */}
      <main className="complaints-main">

        <div className="complaints-title-row">

          <div>
            <h1>My Complaints</h1>

            <p>
              Track the status of your submitted civic issues.
            </p>
          </div>

          <select
            className="filter-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">
              All Complaints
            </option>

            <option value="In Progress">
              In Progress
            </option>

            <option value="Pending">
              Pending
            </option>

            <option value="Resolved">
              Resolved
            </option>
          </select>

        </div>

        {/* COMPLAINT CARDS */}
        <div className="complaints-grid">

          {filteredComplaints.map((item) => (

            <div
              className="complaint-card"
              key={item.id}
              onClick={() =>
                alert(
                  `${item.title}\nID: ${item.id}\nStatus: ${item.status}`
                )
              }
            >

              <div className="complaint-content">

                <div className="complaint-top">

                  <div
                    className={`complaint-icon ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <span
                    className={`status-badge ${
                      item.status === "In Progress"
                        ? "progress"
                        : item.status === "Pending"
                        ? "pending"
                        : "resolved"
                    }`}
                  >
                    {item.status}
                  </span>

                </div>

                <h2>
                  {item.title}
                </h2>

                <p>
                  {item.description}
                </p>

              </div>

              <div className="complaint-footer">

                <span>
                  📅 {item.date}
                </span>

                <span className="complaint-id">
                  ID: {item.id}
                </span>

              </div>

            </div>

          ))}

        </div>

        {filteredComplaints.length === 0 && (
          <div className="no-complaints">
            No complaints found.
          </div>
        )}

      </main>

      {/* BOTTOM NAV */}
      <nav className="complaints-bottom-nav">

        <button
          className="complaints-nav-item"
          onClick={goHome}
        >
          <span>🏠</span>
          <small>Home</small>
        </button>

        <button
          className="complaints-nav-item active"
          onClick={goComplaints}
        >
          <span>📋</span>
          <small>Complaints</small>
        </button>

        <button
          className="complaints-nav-item"
          onClick={() =>
            alert("Submit Complaint page will be added next.")
          }
        >
          <span>➕</span>
          <small>Submit</small>
        </button>

        <button
          className="complaints-nav-item"
          onClick={() =>
            alert("Profile page will be added next.")
          }
        >
          <span>👤</span>
          <small>Profile</small>
        </button>

      </nav>

    </div>
  );
}

export default Complaints;