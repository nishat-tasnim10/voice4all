import Submit from "./pages/submit";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
   return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />

    <Route path="/submit" element={<Submit />} />

  </Routes>
</BrowserRouter>
   );
}

export default App;
