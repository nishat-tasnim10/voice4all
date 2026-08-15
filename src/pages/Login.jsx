
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/submit");
  };

  return (
    <div className="login-page">

      <div className="login-container">

        {/* LEFT SIDE */}
        <section className="hero-section">

          <div className="brand">
            <div className="brand-icon">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="brand-name">
              Voice<span>4</span>All
            </div>
          </div>

          <div className="hero-content">

            <div className="hero-tag">
              <span className="dot"></span>
              COMMUNICATION WITHOUT BARRIERS
            </div>

            <h1>
              Your Voice.
              <br />
              <span>Everyone Heard.</span>
            </h1>

            <p>
              Connect, communicate and express yourself.
              Voice4All makes communication more accessible,
              inclusive and simple for everyone.
            </p>

            {/* SOUND WAVE */}
            <div className="sound-wave">
              <span style={{ height: "20px" }}></span>
              <span style={{ height: "30px" }}></span>
              <span style={{ height: "45px" }}></span>
              <span style={{ height: "25px" }}></span>
              <span style={{ height: "55px" }}></span>
              <span style={{ height: "38px" }}></span>
              <span style={{ height: "70px" }}></span>
              <span style={{ height: "50px" }}></span>
              <span style={{ height: "90px" }}></span>
              <span style={{ height: "60px" }}></span>
              <span style={{ height: "80px" }}></span>
              <span style={{ height: "45px" }}></span>
              <span style={{ height: "70px" }}></span>
              <span style={{ height: "50px" }}></span>
              <span style={{ height: "85px" }}></span>
              <span style={{ height: "45px" }}></span>
              <span style={{ height: "65px" }}></span>
              <span style={{ height: "35px" }}></span>
              <span style={{ height: "55px" }}></span>
              <span style={{ height: "25px" }}></span>
            </div>

            <div className="features">

              <div>
                <strong>Accessible</strong>
                <small>For everyone</small>
              </div>

              <div>
                <strong>Simple</strong>
                <small>Easy to use</small>
              </div>

              <div>
                <strong>Connected</strong>
                <small>Stay in touch</small>
              </div>

            </div>

          </div>

        </section>

        {/* RIGHT SIDE */}
        <section className="login-section">

          <div className="login-card">

            <h2>
              {isSignUp ? "Sign Up" : "Login"}
            </h2>

            <p className="login-subtitle">
              {isSignUp
                ? "Create your Voice4All account"
                : "Access your Voice4All account"}
            </p>

            <form onSubmit={handleSubmit}>

              {/* NAME ONLY FOR SIGN UP */}
              {isSignUp && (
                <div className="input-group">

                  <label>Full Name</label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />

                </div>
              )}

              {/* EMAIL */}
              <div className="input-group">

                <label>Email</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />

              </div>

              {/* PASSWORD */}
              <div className="input-group">

                <label>Password</label>

                <div className="password-wrapper">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                  />

                  <button
                    type="button"
                    className="show-password"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

              </div>

              {/* CONFIRM PASSWORD FOR SIGN UP */}
              {isSignUp && (
                <div className="input-group">

                  <label>Confirm Password</label>

                  <input
                    type="password"
                    placeholder="Confirm your password"
                    required
                  />

                </div>
              )}

              {/* LOGIN OPTIONS */}
              {!isSignUp && (
                <div className="options">

                  <label>
                    <input type="checkbox" />
                    Remember me
                  </label>

                  <a href="#">
                    Forgot password?
                  </a>

                </div>
              )}

              {/* MAIN BUTTON */}
              <button
                type="submit"
                className="sign-in-button"
              >
                {isSignUp ? "Sign Up" : "Login"}
              </button>

            </form>

            {/* SWITCH BETWEEN LOGIN AND SIGN UP */}
            <p className="signup">

              {isSignUp
                ? "Already have an account?"
                : "Don't have an account?"}

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsSignUp(!isSignUp);
                  setShowPassword(false);
                }}
              >
                {isSignUp ? " Login" : " Create account"}
              </a>

            </p>

          </div>

        </section>

      </div>

    </div>
  );
}
