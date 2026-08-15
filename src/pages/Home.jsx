import "./Home.css";

function Home({ goComplaints }) {
  return (
    <div className="home-page">

      {/* HEADER */}
      <header className="home-header">
        <div className="home-logo">
          <div className="home-logo-icon">🏙️</div>
          <span>Voice4all</span>
        </div>

        <button
          className="notification-btn"
          onClick={() => alert("You have no new notifications.")}
        >
          🔔
        </button>
      </header>

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

          <h2>What would you like to report?</h2>

          <p className="section-description">
            Select the category that best matches your civic issue.
          </p>

          <div className="category-grid">

            <div className="category-card">
              <div className="category-icon blue">💧</div>

              <h3>Water Leakage</h3>

              <p>
                Broken pipes, water leakage and supply issues.
              </p>
            </div>


            <div className="category-card">
              <div className="category-icon orange">🗑️</div>

              <h3>Garbage Collection</h3>

              <p>
                Missed collection, waste and overflowing bins.
              </p>
            </div>


            <div className="category-card">
              <div className="category-icon purple">🛣️</div>

              <h3>Road Damage</h3>

              <p>
                Potholes, damaged roads and unsafe surfaces.
              </p>
            </div>


            <div className="category-card">
              <div className="category-icon red">⚡</div>

              <h3>Electricity Problems</h3>

              <p>
                Power outages, electrical lines and streetlight issues.
              </p>
            </div>


            <div className="category-card">
              <div className="category-icon green">🧹</div>

              <h3>Sanitation</h3>

              <p>
                Drainage, hygiene and sanitation problems.
              </p>
            </div>

          </div>
        </section>


        {/* QUICK ACTIONS */}
        <section className="quick-section">

          <h2>Quick Actions</h2>

          <p className="section-description">
            Choose what you want to do next.
          </p>

          <div className="quick-grid">

            <button
              className="quick-card"
              onClick={() =>
                alert("Submit Complaint page will be added next.")
              }
            >
              <div className="quick-icon">➕</div>

              <div>
                <h3>Submit Complaint</h3>

                <p>
                  Report your local issue directly to the proper authority.
                </p>
              </div>
            </button>


            <button
              className="quick-card"
              onClick={goComplaints}
            >
              <div className="quick-icon">📋</div>

              <div>
                <h3>Track Complaint</h3>

                <p>
                  Check the current status of your submitted complaints.
                </p>
              </div>
            </button>


            <button
              className="quick-card"
              onClick={() =>
                alert("No new notices available.")
              }
            >
              <div className="quick-icon">📢</div>

              <div>
                <h3>View Notices</h3>

                <p>
                  See public notices and community announcements.
                </p>
              </div>
            </button>

          </div>

        </section>

      </main>


      {/* BOTTOM NAV */}
      <nav className="bottom-nav">

        <button className="nav-item active">
          <span className="nav-icon">🏠</span>
          <span>Home</span>
        </button>


        <button
          className="nav-item"
          onClick={goComplaints}
        >
          <span className="nav-icon">📋</span>
          <span>Complaints</span>
        </button>


        <button
          className="nav-item"
          onClick={() =>
            alert("Submit Complaint page will be added next.")
          }
        >
          <span className="nav-icon">➕</span>
          <span>Submit</span>
        </button>


        <button
          className="nav-item"
          onClick={() =>
            alert("Profile page will be added next.")
          }
        >
          <span className="nav-icon">👤</span>
          <span>Profile</span>
        </button>

      </nav>

    </div>
  );
}

export default Home;