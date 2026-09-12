import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./Home.css";

function Home({ goHome, goComplaints }) {

  const navigate = useNavigate();

  return (

    <div className="home-page">


      {/* HEADER */}

      <Header
        goHome={goHome}
        goComplaints={goComplaints}
      />



      {/* MAIN CONTENT */}

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



            <div className="category-card">

              <div className="category-icon blue">
                💧
              </div>

              <h3>
                Water Leakage
              </h3>

              <p>
                Broken pipes, water leakage and supply issues.
              </p>

            </div>




            <div className="category-card">

              <div className="category-icon orange">
                🗑️
              </div>

              <h3>
                Garbage Collection
              </h3>

              <p>
                Missed collection, waste and overflowing bins.
              </p>

            </div>





            <div className="category-card">

              <div className="category-icon purple">
                🛣️
              </div>


              <h3>
                Road Damage
              </h3>


              <p>
                Potholes, damaged roads and unsafe surfaces.
              </p>

            </div>





            <div className="category-card">


              <div className="category-icon red">
                ⚡
              </div>


              <h3>
                Electricity Problems
              </h3>


              <p>
                Power outages, electrical lines and streetlight issues.
              </p>


            </div>





            <div className="category-card">


              <div className="category-icon green">
                🧹
              </div>


              <h3>
                Sanitation
              </h3>


              <p>
                Drainage, hygiene and sanitation problems.
              </p>


            </div>



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






            {/* SUBMIT COMPLAINT */}



            <button

              type="button"

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








            {/* VIEW DETAILS */}





            <button

              type="button"

              className="quick-card"

              onClick={() => navigate("/complaints")}

            >



              <div className="quick-icon">

                📄

              </div>





              <div>


                <h3>
                  View Details
                </h3>


                <p>
                  Check your submitted complaints and track their status.
                </p>


              </div>



            </button>





          </div>



        </section>





      </main>



    </div>


  );

}


export default Home;