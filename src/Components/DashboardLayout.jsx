import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => (
  <div>
    <nav style={{ background: "#ccc", padding: "1rem" }}>
      <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="/dashboard/profile">Profile</Link>
    </nav>
    <Outlet />
  </div>
);

export default DashboardLayout;
