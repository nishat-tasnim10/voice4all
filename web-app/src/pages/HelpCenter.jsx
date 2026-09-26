
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./footer";
import "./HelpCenter.css";

function HelpCenter() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const topics = [
    {
      icon: "📢",
      title: "Submit a Complaint",
      slug: "submit-complaint",
      description: "Learn how to submit a new complaint.",
    },
    
    {
      icon: "👤",
      title: "Account Help",
      slug: "account-help",
      description: "Get help with your account and profile.",
    },
    {
      icon: "📞",
      title: "Contact Support",
      slug: "contact-support",
      description: "Get help from our support team.",
    },
  ];

  const faqs = [
    {
      question: "How do I submit a complaint?",
      answer:
        "Go to the Submit Complaint page, enter your complaint details, and click Submit.",
    },
    {
      question: "How can I contact support?",
      answer:
        "Use the Contact Support button below to contact the Voice4All support team.",
    },
  ];

  const search = searchTerm.toLowerCase().trim();

  const filteredTopics = topics.filter((topic) =>
    `${topic.title} ${topic.description}`
      .toLowerCase()
      .includes(search)
  );

  const filteredFAQs = faqs.filter((faq) =>
    `${faq.question} ${faq.answer}`
      .toLowerCase()
      .includes(search)
  );

  return (
    <div className="help-center">

      <Header />

      {/* ================= MAIN PAGE ================= */}
      <div className="help-main">

        {/* ================= HERO ================= */}
        <section className="help-hero">

          <h1>How can we help you?</h1>

          <p>
            Find answers, guides, and support for Voice4All.
          </p>

          <div className="search-box">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search for help..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          </div>

        </section>

        {/* ================= CONTENT ================= */}
        <main className="help-content">

          {/* ================= TOPICS ================= */}
          <section className="topics-section">

            <h2>Popular Help Topics</h2>

            <p className="subtitle">
              Choose a topic to find the help you need.
            </p>

            <div className="topic-grid">

              {filteredTopics.map((topic, index) => (

                <div
                  className="topic-card"
                  key={index}
                >

                  <div className="topic-icon">
                    {topic.icon}
                  </div>

                  <h3>
                    {topic.title}
                  </h3>

                  <p>
                    {topic.description}
                  </p>

                  <Link to={`/help-center/${topic.slug}`}>
                    Learn More →
                  </Link>

                </div>

              ))}

            </div>

            {filteredTopics.length === 0 && (
              <p className="no-result">
                No help topic found.
              </p>
            )}

          </section>


          {/* ================= FAQ ================= */}
          <section className="faq-section">

            <h2>
              Frequently Asked Questions
            </h2>

            <div className="faq-list">

              {filteredFAQs.map((faq, index) => (

                <div
                  className="faq-item"
                  key={index}
                >

                  <button
                    type="button"
                    className="faq-question"
                    onClick={() =>
                      setOpenFAQ(
                        openFAQ === index
                          ? null
                          : index
                      )
                    }
                  >

                    <span>
                      {faq.question}
                    </span>

                    <span className="faq-icon">
                      {openFAQ === index
                        ? "−"
                        : "+"}
                    </span>

                  </button>

                  {openFAQ === index && (
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  )}

                </div>

              ))}

            </div>

            {filteredFAQs.length === 0 && (
              <p className="no-result">
                No question found.
              </p>
            )}

          </section>


          {/* ================= SUPPORT ================= */}
          <section className="support-box">

            <div className="support-text">

              <h2>
                Still need help?
              </h2>

              <p>
                Our support team is here to help you.
              </p>

            </div>

            <Link
              className="support-link"
              to="/help-center/contact-support"
            >
              Contact Support
            </Link>

          </section>

        </main>

      </div>

      <Footer />

    </div>
  );
}

export default HelpCenter;

