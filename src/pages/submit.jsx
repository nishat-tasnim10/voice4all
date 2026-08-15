import Header from "../pages/Header";
import Footer from "../pages/Footer";

export default function Submit() {
  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "calc(100vh - 146px)",
          background: "#ffffff",
          padding: "80px",
          color: "#0B1F3A",
        }}
      >
        <h1>Submit Complaint</h1>
        <p>Tell us what happened. We're listening.</p>
      </main>

      <Footer />
    </>
  );
}