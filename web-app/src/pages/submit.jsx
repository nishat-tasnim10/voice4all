import { useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import "./submit.css";

export default function Submit() {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("");
  const [priority, setPriority] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          description,
          department,
          priority,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Complaint submitted successfully!");

        setSubject("");
        setDescription("");
        setDepartment("");
        setPriority("");
        setImage(null);
      } else {
        alert(data.message || "Failed to submit complaint");
      }

    } catch (error) {
      console.error("Submit Error:", error);
      alert("Could not connect to the server");
    }
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

            <div className="form-section">
              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="Briefly describe the issue"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            <div className="form-section">
              <label htmlFor="description">
                Description
              </label>

              <textarea
                id="description"
                placeholder="Explain what happened..."
                rows="7"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-section">
              <label htmlFor="department">
                Department
              </label>

              <select
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              >
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