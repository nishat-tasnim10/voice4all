import { Outlet } from "react-router-dom";
import Sidebar from "./pages/Sidebar";

export default function AppLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
