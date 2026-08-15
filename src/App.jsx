import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Complaints from "./pages/Complaints";

function App() {
  const [page, setPage] = useState("home");

  // Every page change starts from the top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [page]);

  const goHome = () => {
    setPage("home");
  };

  const goComplaints = () => {
    setPage("complaints");
  };

  if (page === "complaints") {
    return (
      <Complaints
        goHome={goHome}
        goComplaints={goComplaints}
      />
    );
  }

  return (
    <Home
      goHome={goHome}
      goComplaints={goComplaints}
    />
  );
}

export default App;