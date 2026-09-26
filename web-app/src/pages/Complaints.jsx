
import { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./footer";

import "./Complaints.css";

import axiosInstance from "../utils/axiosInstance";


function Complaints() {

  const [filter, setFilter] = useState("All");

  const [complaints, setComplaints] = useState([]);

  const [loading, setLoading] = useState(true);


  // Get complaints from backend
  useEffect(() => {

    const getComplaints = async () => {

      try {

        const response = await axiosInstance.get("/submit");

        setComplaints(response.data);

      } catch (error) {

        console.error("Failed to load complaints:", error);

      } finally {

        setLoading(false);

      }

    };


    getComplaints();

  }, []);


  // Filter complaints
  const filteredComplaints =
    filter === "All"
      ? complaints
      : complaints.filter((item) => {

          if (filter === "In Progress") {

            return (
              item.status === "in-progress" ||
              item.status === "In Progress"
            );

          }

          if (filter === "Pending") {

            return (
              item.status === "pending" ||
              item.status === "Pending"
            );

          }

          if (filter === "Resolved") {

            return (
              item.status === "resolved" ||
              item.status === "Resolved"
            );

          }

          if (filter === "Rejected") {

            return (
              item.status === "rejected" ||
              item.status === "Rejected"
            );

          }

          return item.status === filter;

        });


  // Convert backend status to display text
  const getStatusText = (status) => {

    if (status === "pending") {
      return "Pending";
    }

    if (status === "in-progress") {
      return "In Progress";
    }

    if (status === "resolved") {
      return "Resolved";
    }

    if (status === "rejected") {
      return "Rejected";
    }

    return status;

  };


  // Status CSS class
  const getStatusClass = (status) => {

    if (
      status === "in-progress" ||
      status === "In Progress"
    ) {
      return "progress";
    }

    if (
      status === "pending" ||
      status === "Pending"
    ) {
      return "pending";
    }

    if (
      status === "resolved" ||
      status === "Resolved"
    ) {
      return "resolved";
    }

    if (
      status === "rejected" ||
      status === "Rejected"
    ) {
      return "rejected";
    }

    return "pending";

  };


  // Department icon
  const getIcon = (department) => {

    switch (department) {

      case "water":
        return "💧";

      case "waste":
        return "🗑️";

      case "roads":
        return "🛣️";

      case "electricity":
        return "⚡";

      case "drainage":
        return "🧹";

      case "lighting":
        return "💡";

      case "traffic":
        return "🚦";

      case "health":
        return "🏥";

      case "parks":
        return "🌳";

      default:
        return "📢";

    }

  };


  // Department color
  const getColor = (department) => {

    switch (department) {

      case "water":
        return "blue";

      case "waste":
        return "orange";

      case "roads":
        return "purple";

      case "electricity":
        return "red";

      case "drainage":
        return "green";

      default:
        return "blue";

    }

  };


  // Format date
  const getDate = (date) => {

    if (!date) {
      return "";
    }

    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  };


  return (

    <div className="complaints-page">

      <Header />


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

            <option value="Rejected">
              Rejected
            </option>

          </select>

        </div>


        {/* Loading */}

        {loading && (

          <div className="no-complaints">

            Loading complaints...

          </div>

        )}


        {/* Complaints */}

        {!loading && (

          <div className="complaints-grid">

            {filteredComplaints.map((item) => (

              <div
                className="complaint-card"
                key={item._id}
              >

                <div className="complaint-content">

                  <div className="complaint-top">

                    <div
                      className={`complaint-icon ${getColor(
                        item.department
                      )}`}
                    >

                      {getIcon(item.department)}

                    </div>


                    <span
                      className={`status-badge ${getStatusClass(
                        item.status
                      )}`}
                    >

                      {getStatusText(item.status)}

                    </span>

                  </div>


                  <h2>
                    {item.subject}
                  </h2>


                  <p>
                    {item.description}
                  </p>

                </div>


                <div className="complaint-footer">

                  <span>
                    📅 {getDate(item.createdAt)}
                  </span>


                  <span className="complaint-id">

                    ID: {item._id}

                  </span>

                </div>

              </div>

            ))}

          </div>

        )}


        {/* No complaints */}

        {!loading &&
          filteredComplaints.length === 0 && (

            <div className="no-complaints">

              No complaints found.

            </div>

          )}

      </main>


      <Footer />

    </div>

  );

}


export default Complaints;
