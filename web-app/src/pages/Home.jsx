import Header from "./Header";
import Footer from "./footer";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* HEADER */}
      <Header />


      {/* MAIN */}
      <main className="home-main">

        {/* HERO */}
        <section className="hero">

          <p className="hero-label">
            YOUR CITY • YOUR VOICE
          </p>

          <h1>
            Report civic problems and help make your community better.
          </h1>

          <p className="hero-text">
            Choose a civic issue category, report the problem,
            and track how the responsible authority handles it.
          </p>

        </section>


        {/* CATEGORIES */}
        <section className="category-section">

          <h2>
            What would you like to report?
          </h2>

          <p className="section-description">
            Select the category that best matches your civic issue.
          </p>


          <div className="category-grid">

            {/* WATER */}
            <Link className="category-card" to="/submit?department=water">

              <div className="category-icon blue">
                💧
              </div>

              <h3>
                Water Leakage
              </h3>

              <p>
                Broken pipes, water leakage and supply issues.
              </p>

            </Link>


            {/* GARBAGE */}
            <Link className="category-card" to="/submit?department=waste">

              <div className="category-icon orange">
                🗑️
              </div>

              <h3>
                Garbage Collection
              </h3>

              <p>
                Missed collection, waste and overflowing bins.
              </p>

            </Link>


            {/* ROAD */}
            <Link className="category-card" to="/submit?department=roads">

              <div className="category-icon purple">
                🛣️
              </div>

              <h3>
                Road Damage
              </h3>

              <p>
                Potholes, damaged roads and unsafe surfaces.
              </p>

            </Link>


            {/* ELECTRICITY */}
            <Link className="category-card" to="/submit?department=lighting">

              <div className="category-icon red">
                ⚡
              </div>

              <h3>
                Electricity Problems
              </h3>

              <p>
                Power outages, electrical lines and streetlight issues.
              </p>

            </Link>


            {/* SANITATION */}
            <Link className="category-card" to="/submit?department=drainage">

              <div className="category-icon green">
                🧹
              </div>

              <h3>
                Sanitation
              </h3>

              <p>
                Drainage, hygiene and sanitation problems.
              </p>

            </Link>

          </div>

        </section>


        {/* QUICK ACTIONS */}
        <section className="quick-section">

          <h2>
            Quick Actions
          </h2>

          <p className="section-description">
            Choose what you want to do next.
          </p>


          <div className="quick-grid">

            {/* SUBMIT */}
            <button
              className="quick-card"
              onClick={() => navigate("/submit")}
            >

              <div className="quick-icon">
                ➕
              </div>

              <div>

                <h3>
                  Submit Complaint
                </h3>

                <p>
                  Report your local issue directly to the proper authority.
                </p>

              </div>

            </button>


          </div>

        </section>

      </main>


      {/* BOTTOM NAV 
      <nav className="bottom-nav">

       
        <button
          className="nav-item active"
          onClick={goHome}
        >

          <span className="nav-icon">
            🏠
          </span>

          <span>
            Home
          </span>

        </button>


       
        <button
          className="nav-item"
          onClick={goComplaints}
        >

          <span className="nav-icon">
            📋
          </span>

          <span>
            Complaints
          </span>

        </button>


      
        <button
          className="nav-item"
          onClick={() => navigate("/submit")}
        >

          <span className="nav-icon">
            ➕
          </span>

          <span>
            Submit
          </span>

        </button>


      
        <button
          className="nav-item"
          onClick={() =>
            alert("Profile page will be added next.")
          }
        >

          <span className="nav-icon">
            👤
          </span>

          <span>
            Profile
          </span>

        </button>

      </nav>  */}

      <Footer />
    </div>
  );
}

export default Home;