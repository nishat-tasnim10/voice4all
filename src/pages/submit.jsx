
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./footer";
import "./submit.css";

export default function Submit() {
  const [priority, setPriority] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Complaint submitted successfully!");
  };

  return (
    <>
      <Header />

      <main className="submit-page">
        <section className="submit-container">

          <div className="submit-heading">
            <p className="submit-label">VOICE4ALL</p>

            <h1>Submit a Complaint</h1>

            <p>
              Tell us what happened. Your voice matters,
              and we're here to listen.
            </p>
          </div>

          <form className="complaint-form" onSubmit={handleSubmit}>

            {/* SUBJECT */}
            <div className="form-section">
              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="Briefly describe the issue"
                required
              />
            </div>


            {/* DESCRIPTION */}
            <div className="form-section">
              <label htmlFor="description">
                Description
              </label>

              <textarea
                id="description"
                placeholder="Explain what happened..."
                rows="7"
                required
              ></textarea>
            </div>
            
{/* DEPARTMENT */}
<div className="form-section">
  <label htmlFor="department">
    Department
  </label>

  <select id="department" required>
  <option value="">Select department</option>
  <option value="roads">Roads & Infrastructure</option>
  <option value="waste">Waste Management</option>
  <option value="water">Water Supply</option>
  <option value="drainage">Drainage & Sewerage</option>
  <option value="lighting">Street Lighting</option>
  <option value="health">Public Health</option>
  <option value="parks">Parks & Environment</option>
  <option value="traffic">Traffic & Transportation</option>
  <option value="maintenance">Building & Maintenance</option>
  <option value="other">Other</option>
</select>
</div>

            {/* PRIORITY */}
            <div className="form-section">
              <label>
                Priority
              </label>

              <div className="priority-options">

                <label className="priority-option">
                  <input
                    type="radio"
                    name="priority"
                    value="Low"
                    checked={priority === "Low"}
                    onChange={(e) => setPriority(e.target.value)}
                    required
                  />
                  <span>Low</span>
                </label>

                <label className="priority-option">
                  <input
                    type="radio"
                    name="priority"
                    value="Medium"
                    checked={priority === "Medium"}
                    onChange={(e) => setPriority(e.target.value)}
                  />
                  <span>Medium</span>
                </label>

                <label className="priority-option">
                  <input
                    type="radio"
                    name="priority"
                    value="High"
                    checked={priority === "High"}
                    onChange={(e) => setPriority(e.target.value)}
                  />
                  <span>High</span>
                </label>

              </div>
            </div>


            {/* IMAGE UPLOAD */}
            <div className="form-section">
              <label>
                Upload Images
                <span className="optional"> (optional)</span>
              </label>

              <label className="upload-box">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />

                <span className="upload-icon">+</span>

                <span className="upload-text">
                  {image
                    ? image.name
                    : "Click to upload an image"}
                </span>

                <small>
                  PNG, JPG or JPEG
                </small>
              </label>
            </div>


            {/* SUBMIT */}
            <button
              type="submit"
              className="submit-button"
            >
              Submit Complaint
            </button>

          </form>

        </section>
      </main>

      <Footer />
    </>
  );
}