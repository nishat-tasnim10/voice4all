
import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What is Voice4All?",
        answer:
          "Voice4All is a platform that allows citizens to report local problems and complaints, helping issues reach the appropriate department for action.",
      },
      {
        question: "Who can use Voice4All?",
        answer:
          "Anyone who wants to report a local issue or track the progress of a submitted complaint can use Voice4All.",
      },
    ],
  },
  {
    category: "Reporting Issues",
    questions: [
      {
        question: "How do I report an issue?",
        answer:
          'Click on "Report an Issue", provide the necessary information about the problem, and submit your complaint.',
      },
      {
        question: "Can I submit a complaint anonymously?",
        answer:
          "Yes. Voice4All allows users to report issues without publicly revealing their identity.",
      },
      {
        question: "What information should I include in my complaint?",
        answer:
          "You should provide a clear description of the problem, its location, category, priority, and any relevant information that can help resolve the issue.",
      },
    ],
  },
  {
    category: "Complaint Tracking",
    questions: [
      {
        question: "How can I track my complaint?",
        answer:
          "After submitting a complaint, you can view its current status from your dashboard.",
      },
      {
        question: "What do the complaint statuses mean?",
        answer:
          "Pending means the complaint has been received. In Progress means the issue is currently being handled. Resolved means the reported issue has been addressed.",
      },
      {
        question: "How long does it take to resolve a complaint?",
        answer:
          "Resolution time depends on the type, priority, and complexity of the reported issue.",
      },
    ],
  },
  {
    category: "Account & Privacy",
    questions: [
      {
        question: "Is my personal information safe?",
        answer:
          "Voice4All is designed to protect user information and only use submitted information for purposes related to handling complaints.",
      },
      {
        question: "Can I update my complaint after submitting it?",
        answer:
          "If an update is necessary, you can contact the appropriate support team with your complaint details.",
      },
    ],
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionIndex = 0;

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="faq-hero-content">
          <span className="faq-label">HELP CENTER</span>

          <h1>Frequently Asked Questions</h1>

          <p>
            Find answers to common questions about reporting and tracking
            community issues through Voice4All.
          </p>

          {/* Search */}
          <div className="faq-search">
            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search your question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <main className="faq-container">
        {faqData.map((section) => {
          const filteredQuestions = section.questions.filter((item) =>
            `${item.question} ${item.answer}`
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          );

          if (filteredQuestions.length === 0) return null;

          return (
            <section className="faq-category" key={section.category}>
              <div className="category-title">
                <span></span>
                <h2>{section.category}</h2>
              </div>

              <div className="faq-list">
                {filteredQuestions.map((item) => {
                  const currentIndex = questionIndex++;

                  return (
                    <div
                      className={`faq-item ${
                        openIndex === currentIndex ? "active" : ""
                      }`}
                      key={item.question}
                    >
                      <button
                        className="faq-question"
                        onClick={() => toggleFAQ(currentIndex)}
                      >
                        <span>{item.question}</span>

                        <span className="faq-icon">
                          {openIndex === currentIndex ? "−" : "+"}
                        </span>
                      </button>

                      <div
                        className={`faq-answer ${
                          openIndex === currentIndex ? "show" : ""
                        }`}
                      >
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* No Results */}
        {searchTerm &&
          !faqData.some((section) =>
            section.questions.some((item) =>
              `${item.question} ${item.answer}`
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
          ) && (
            <div className="no-results">
              <div className="no-results-icon">?</div>
              <h3>No questions found</h3>
              <p>Try searching with different keywords.</p>
            </div>
          )}
      </main>

      {/* Contact CTA */}
      <section className="faq-contact">
        <div className="contact-content">
          <div className="contact-icon">?</div>

          <div>
            <h2>Still have questions?</h2>
            <p>
              Can't find the answer you're looking for? Our team is here to
              help.
            </p>
          </div>

          <button className="contact-button">Contact Us</button>
        </div>
      </section>
    </div>
  );
}

export default FAQ;

