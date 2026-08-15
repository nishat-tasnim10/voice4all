import { useState } from "react";
import Home from "./pages/Home";
import Complaints from "./pages/Complaints";

function App() {
  const [page, setPage] = useState("home");

  if (page === "complaints") {
    return (
      <Complaints
        goHome={() => setPage("home")}
      />
    );
  }

  return (
    <Home
      goComplaints={() => setPage("complaints")}
    />
  );
}

export default App;