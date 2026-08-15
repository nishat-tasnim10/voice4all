```jsx
import Submit from "./pages/submit";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/submit" element={<Submit />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
