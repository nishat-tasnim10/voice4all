//import Dashboard from "./pages/Dashboard";

//function App() {
  //return  <Dashboard />;
//}

//export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/admin-dashboard"
                    element={<AdminDashboard />}
                />

                <Route
                    path="/"
                    element={<Dashboard />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;




