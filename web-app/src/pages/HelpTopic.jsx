import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./footer";
import "./HelpCenter.css";

const guides = {
  "submit-complaint": {
    icon: "📢",
    title: "Submit a Complaint",
    intro: "Share a clear report so the right team can understand and review the issue.",
    steps: [
      "Open the Submit Complaint page. Sign in first if the site asks you to.",
      "Add a short subject and describe what happened, including where and when you noticed it.",
      "Choose the department and priority that best match the issue. Attach a photo if it helps explain the problem.",
      "Review your details, then submit the form. Keep any confirmation or complaint reference shown on screen.",
    ],
    action: { label: "Go to Submit Complaint", to: "/submit" },
  },
  "track-complaint": {
    icon: "📍",
    title: "Track a Complaint",
    intro: "Check the latest status of a report you have already submitted.",
    steps: [
      "Open View Complaints to see your submitted reports, or open your Dashboard for a summary.",
      "Find the complaint using its subject or reference number.",
      "Read the status shown on the complaint. Pending means it is awaiting action; In Progress means it is being handled; Resolved means it has been marked complete.",
      "If you need help with a specific report, include its reference number when contacting support.",
    ],
    action: { label: "View Complaints", to: "/complaints" },
  },
  "account-help": {
    icon: "👤",
    title: "Account Help",
    intro: "Use your account to sign in and access your complaint dashboard.",
    steps: [
      "Open the Log In page and enter your username and password.",
      "To create an account, choose the sign-up option and complete the requested fields.",
      "After signing in, open Dashboard to review your account-related complaint information.",
      "If you cannot access your account, contact support with your username. Never send your password.",
    ],
    action: { label: "Open Log In", to: "/login" },
  },
  "contact-support": {
    icon: "📞",
    title: "Contact Support",
    intro: "Send the support team enough detail to understand what you need help with.",
    steps: [
      "Email support@voice4all.com from an address where the team can reply.",
      "Use a brief subject that describes the problem, such as account access or complaint status.",
      "Include the page you were using, what you expected to happen, and any complaint reference number that applies.",
      "Do not include your password or other sensitive sign-in details.",
    ],
    action: { label: "Email Support", to: "mailto:support@voice4all.com" },
  },
};

function HelpTopic() {
  const { topicSlug } = useParams();
  const guide = guides[topicSlug];

  return (
    <div className="help-guide-page">
      <Header />

      <main className="help-guide-main">
        <Link className="help-guide-back" to="/help-center">
          ← Back to Help Center
        </Link>

        {guide ? (
          <article className="help-guide-content">
            <div className="help-guide-icon" aria-hidden="true">
              {guide.icon}
            </div>
            <p className="help-guide-eyebrow">VOICE4ALL HELP GUIDE</p>
            <h1>{guide.title}</h1>
            <p className="help-guide-intro">{guide.intro}</p>

            <h2>What to do</h2>
            <ol className="help-guide-steps">
              {guide.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            {guide.action.to.startsWith("mailto:") ? (
              <a className="help-guide-action" href={guide.action.to}>
                {guide.action.label}
              </a>
            ) : (
              <Link className="help-guide-action" to={guide.action.to}>
                {guide.action.label}
              </Link>
            )}
          </article>
        ) : (
          <section className="help-guide-content">
            <h1>Help topic not found</h1>
            <p className="help-guide-intro">
              Choose a guide from the Help Center to find the instructions you need.
            </p>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default HelpTopic;