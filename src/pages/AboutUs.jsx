
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">

        <div className="about-tag">
          ABOUT VOICE4ALL
        </div>

        <h1>
          Everyone deserves
          <br />
          <span>to be heard.</span>
        </h1>

        <p>
          Voice4All is a community-focused platform designed to
          make communication easier, more accessible and more
          inclusive for everyone.
        </p>

      </section>


      {/* ABOUT */}
      <section className="about-section">

        <div className="about-card">

          <h2>What is Voice4All?</h2>

          <p>
            Voice4All provides a simple way for people to express
            their concerns and submit complaints. Our goal is to
            connect people with the right channels so that their
            voices can be heard and their concerns can be addressed.
          </p>

          <p>
            Whether you want to report an issue, view submitted
            complaints or track information through your dashboard,
            Voice4All brings these services together in one place.
          </p>

        </div>

      </section>


      {/* VALUES */}
      <section className="values-section">

        <div className="section-heading">
          <span>OUR VALUES</span>

          <h2>
            Built around
            <br />
            <strong>people.</strong>
          </h2>
        </div>


        <div className="values-grid">

          <div className="value-card">
            <div className="value-number">01</div>

            <h3>Accessibility</h3>

            <p>
              We aim to make communication simple and accessible
              for everyone.
            </p>
          </div>


          <div className="value-card">
            <div className="value-number">02</div>

            <h3>Transparency</h3>

            <p>
              We believe people should be able to clearly understand
              and follow the concerns they submit.
            </p>
          </div>


          <div className="value-card">
            <div className="value-number">03</div>

            <h3>Community</h3>

            <p>
              We encourage people to speak up and contribute toward
              a better and more connected community.
            </p>
          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="mission-section">

        <div className="mission-content">

          <span>OUR MISSION</span>

          <h2>
            Give every concern
            <br />
            <strong>a place to be heard.</strong>
          </h2>

          <p>
            Voice4All is built around a simple idea: communication
            should not have barriers. By providing an easy-to-use
            complaint platform, we want to help people communicate
            their concerns clearly and efficiently.
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <h2>
          Your voice matters.
        </h2>

        <p>
          Speak up, share your concerns and help make a difference.
        </p>

      </section>

    </div>
  );
}

