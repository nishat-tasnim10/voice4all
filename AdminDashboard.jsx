[1mdiff --git a/src/pages/AdminDashboard.jsx b/src/pages/AdminDashboard.jsx[m
[1mindex a33816c..03db5df 100644[m
[1m--- a/src/pages/AdminDashboard.jsx[m
[1m+++ b/src/pages/AdminDashboard.jsx[m
[36m@@ -1,132 +1,28 @@[m
[32m+[m
 import Header from "./Header";[m
 import Footer from "./footer";[m
[32m+[m[32mimport Sidebar from "./Sidebar";[m
 import "./AdminDashboard.css";[m
[31m-import { Link } from "react-router-dom";[m
 [m
 function AdminDashboard() {[m
     return ([m
         <>[m
[31m-            {/* TEAMMATE HEADER */}[m
[32m+[m[32m            {/* HEADER */}[m
             <Header />[m
 [m
[31m-[m
             {/* ADMIN DASHBOARD */}[m
             <div className="admin-layout">[m
 [m
[32m+[m[32m                {/* SIDEBAR */}[m
[32m+[m[32m                <Sidebar />[m
 [m
[31m-                {/* =========================[m
[31m-                    SIDEBAR[m
[31m-                ========================= */}[m
[31m-[m
[31m-                <aside className="sidebar">[m
[31m-[m
[31m-                    <nav className="sidebar-nav">[m
[31m-[m
[31m-                        {/* DASHBOARD */}[m
[31m-                        <Link[m
[31m-                            to="/admin-dashboard"[m
[31m-                            className="nav-item active"[m
[31m-                        >[m
[31m-                            <span>📊</span>[m
[31m-                            Dashboard[m
[31m-                        </Link>[m
[31m-[m
[31m-[m
[31m-                        {/* COMPLAINTS */}[m
[31m-                        <Link[m
[31m-                            to="/complaints"[m
[31m-                            className="nav-item"[m
[31m-                        >[m
[31m-                            <span>📋</span>[m
[31m-                            Complaints[m
[31m-                        </Link>[m
[31m-[m
[31m-[m
[31m-                        {/* USERS */}[m
[31m-                        <Link[m
[31m-                            to="/users"[m
[31m-                            className="nav-item"[m
[31m-                        >[m
[31m-                            <span>👥</span>[m
[31m-                            Users[m
[31m-                        </Link>[m
[31m-[m
[31m-[m
[31m-                        {/* DEPARTMENTS */}[m
[31m-                        <Link[m
[31m-                            to="/departments"[m
[31m-                            className="nav-item"[m
[31m-                        >[m
[31m-                            <span>🏢</span>[m
[31m-                            Departments[m
[31m-                        </Link>[m
[31m-[m
[31m-[m
[31m-                        {/* REPORTS */}[m
[31m-                        <Link[m
[31m-                            to="/reports"[m
[31m-                            className="nav-item"[m
[31m-                        >[m
[31m-                            <span>📈</span>[m
[31m-                            Reports[m
[31m-                        </Link>[m
[31m-[m
[31m-                    </nav>[m
[31m-[m
[31m-[m
[31m-                    {/* SIDEBAR BOTTOM */}[m
[31m-[m
[31m-                    <div className="sidebar-bottom">[m
[31m-[m
[31m-                        <div className="admin-profile">[m
[31m-[m
[31m-                            <div className="avatar small">[m
[31m-                                A[m
[31m-                            </div>[m
[31m-[m
[31m-[m
[31m-                            <div>[m
[31m-[m
[31m-                                <strong>[m
[31m-                                    Admin[m
[31m-                                </strong>[m
[31m-[m
[31m-                                <small>[m
[31m-                                    Administrator[m
[31m-                                </small>[m
[31m-[m
[31m-                            </div>[m
[31m-[m
[31m-                        </div>[m
[31m-[m
[31m-[m
[31m-                        {/* LOGOUT */}[m
[31m-                        <Link[m
[31m-                            to="/dashboard"[m
[31m-                            className="nav-item logout"[m
[31m-                        >[m
[31m-                            <span>🚪</span>[m
[31m-                            Logout[m
[31m-                        </Link>[m
[31m-[m
[31m-                    </div>[m
[31m-[m
[31m-                </aside>[m
[31m-[m
[31m-[m
[31m-                {/* =========================[m
[31m-                    MAIN CONTENT[m
[31m-                ========================= */}[m
[31m-[m
[32m+[m[32m                {/* MAIN CONTENT */}[m
                 <main className="main-content">[m
 [m
[31m-[m
                     {/* TOP SECTION */}[m
[31m-[m
                     <div className="top-header">[m
 [m
                         <div className="welcome-section">[m
[31m-[m
                             <h1>[m
                                 Admin Dashboard 👋[m
                             </h1>[m
[36m@@ -134,47 +30,32 @@[m [mfunction AdminDashboard() {[m
                             <p>[m
                                 Monitor and manage all complaints.[m
                             </p>[m
[31m-[m
                         </div>[m
 [m
[31m-[m
                         {/* HEADER ACTIONS */}[m
[31m-[m
                         <div className="header-actions">[m
 [m
                             <div className="search-top">[m
[31m-[m
[31m-                                <span>[m
[31m-                                    🔍[m
[31m-                                </span>[m
[32m+[m[32m                                <span>🔍</span>[m
 [m
                                 <input[m
                                     type="text"[m
                                     placeholder="Search..."[m
                                 />[m
[31m-[m
                             </div>[m
 [m
[31m-[m
                             <button className="notification">[m
                                 🔔[m
[31m-[m
[31m-                                <span>[m
[31m-                                    3[m
[31m-                                </span>[m
[31m-[m
[32m+[m[32m                                <span>3</span>[m
                             </button>[m
 [m
[31m-[m
                             <div className="header-admin">[m
 [m
                                 <div className="avatar">[m
                                     A[m
                                 </div>[m
 [m
[31m-[m
                                 <div>[m
[31m-[m
                                     <strong>[m
                                         Admin[m
                                     </strong>[m
[36m@@ -182,13 +63,9 @@[m [mfunction AdminDashboard() {[m
                                     <small>[m
                                         Administrator[m
                                     </small>[m
[31m-[m
                                 </div>[m
 [m
[31m-[m
[31m-                                <span>[m
[31m-                                    ⌄[m
[31m-                                </span>[m
[32m+[m[32m                                <span>⌄</span>[m
 [m
                             </div>[m
 [m
[36m@@ -196,16 +73,10 @@[m [mfunction AdminDashboard() {[m
 [m
                     </div>[m
 [m
[31m-[m
[31m-                    {/* =========================[m
[31m-                        DATE[m
[31m-                    ========================= */}[m
[31m-[m
[32m+[m[32m                    {/* DATE */}[m
                     <div className="date-box">[m
 [m
[31m-                        <span>[m
[31m-                            📅[m
[31m-                        </span>[m
[32m+[m[32m                        <span>📅</span>[m
 [m
                         <span>[m
                             August 15, 2026[m
[36m@@ -213,25 +84,17 @@[m [mfunction AdminDashboard() {[m
 [m
                     </div>[m
 [m
[31m-[m
[31m-                    {/* =========================[m
[31m-                        STATISTICS[m
[31m-                    ========================= */}[m
[31m-[m
[32m+[m[32m                    {/* STATISTICS */}[m
                     <section className="stats-grid">[m
 [m
[31m-[m
                         {/* TOTAL */}[m
[31m-[m
                         <div className="stat-card total">[m
 [m
                             <div className="stat-icon">[m
                                 📋[m
                             </div>[m
 [m
[31m-[m
                             <div>[m
[31m-[m
                                 <p>[m
                                     Total Complaints[m
                                 </p>[m
[36m@@ -241,31 +104,23 @@[m [mfunction AdminDashboard() {[m
                                 </h2>[m
 [m
                                 <small>[m
[31m-[m
                                     <span className="positive">[m
                                         ↑ 12%[m
[31m-                                    </span>[m
[31m-[m
[31m-                                    {" "}from last month[m
[31m-[m
[32m+[m[32m                                    </span>{" "}[m
[32m+[m[32m                                    from last month[m
                                 </small>[m
[31m-[m
                             </div>[m
 [m
                         </div>[m
 [m
[31m-[m
                         {/* OPEN */}[m
[31m-[m
                         <div className="stat-card open">[m
 [m
                             <div className="stat-icon">[m
                                 ![m
                             </div>[m
 [m
[31m-[m
                             <div>[m
[31m-[m
                                 <p>[m
                                     Open Complaints[m
                                 </p>[m
[36m@@ -275,31 +130,23 @@[m [mfunction AdminDashboard() {[m
                                 </h2>[m
 [m
                                 <small>[m
[31m-[m
                                     <span className="red-text">[m
                                         8 new[m
[31m-                                    </span>[m
[31m-[m
[31m-                                    {" "}this week[m
[31m-[m
[32m+[m[32m                                    </span>{" "}[m
[32m+[m[32m                                    this week[m
                                 </small>[m
[31m-[m
                             </div>[m
 [m
                         </div>[m
 [m
[31m-[m
                         {/* IN PROGRESS */}[m
[31m-[m
                         <div className="stat-card progress">[m
 [m
                             <div className="stat-icon">[m
                                 🕐[m
                             </div>[m
 [m
[31m-[m
                             <div>[m
[31m-[m
                                 <p>[m
                                     In Progress[m
                                 </p>[m
[36m@@ -309,31 +156,23 @@[m [mfunction AdminDashboard() {[m
                                 </h2>[m
 [m
                                 <small>[m
[31m-[m
                                     <span className="orange-text">[m
                                         6 pending[m
[31m-                                    </span>[m
[31m-[m
[31m-                                    {" "}review[m
[31m-[m
[32m+[m[32m                                    </span>{" "}[m
[32m+[m[32m                                    review[m
                                 </small>[m
[31m-[m
                             </div>[m
 [m
                         </div>[m
 [m
[31m-[m
                         {/* RESOLVED */}[m
[31m-[m
                         <div className="stat-card resolved">[m
 [m
                             <div className="stat-icon">[m
                                 ✓[m
                             </div>[m
 [m
[31m-[m
                             <div>[m
[31m-[m
                                 <p>[m
                                     Resolved[m
                                 </p>[m
[36m@@ -343,35 +182,23 @@[m [mfunction AdminDashboard() {[m
                                 </h2>[m
 [m
                                 <small>[m
[31m-[m
                                     <span className="green-text">[m
                                         ↑ 18%[m
[31m-                                    </span>[m
[31m-[m
[31m-                                    {" "}resolution rate[m
[31m-[m
[32m+[m[32m                                    </span>{" "}[m
[32m+[m[32m                                    resolution rate[m
                                 </small>[m
[31m-[m
                             </div>[m
 [m
                         </div>[m
 [m
                     </section>[m
 [m
[31m-[m
[31m-                    {/* =========================[m
[31m-                        FILTERS[m
[31m-                    ========================= */}[m
[31m-[m
[32m+[m[32m                    {/* FILTERS */}[m
                     <section className="filter-card">[m
 [m
[31m-                        {/* SEARCH */}[m
[31m-[m
                         <div className="filter-search">[m
 [m
[31m-                            <span>[m
[31m-                                🔍[m
[31m-                            </span>[m
[32m+[m[32m                            <span>🔍</span>[m
 [m
                             <input[m
                                 type="text"[m
[36m@@ -380,9 +207,6 @@[m [mfunction AdminDashboard() {[m
 [m
                         </div>[m
 [m
[31m-[m
[31m-                        {/* CATEGORY */}[m
[31m-[m
                         <div className="filter-group">[m
 [m
                             <label>[m
[36m@@ -390,34 +214,15 @@[m [mfunction AdminDashboard() {[m
                             </label>[m
 [m
                             <select>[m
[31m-[m
[31m-                                <option>[m
[31m-                                    All Categories[m
[31m-                                </option>[m
[31m-[m
[31m-                                <option>[m
[31m-                                    Road[m
[31m-                                </option>[m
[31m-[m
[31m-                                <option>[m
[31m-                                    Water[m
[31m-                                </option>[m
[31m-[m
[31m-                                <option>[m
[31m-                                    Sanitation[m
[31m-                                </option>[m
[31m-[m
[31m-                                <option>[m
[31m-                                    Electricity[m
[31m-                                </option>[m
[31m-[m
[32m+[m[32m                                <option>All Categories</option>[m
[32m+[m[32m                                <option>Road</option>[m
[32m+[m[32m                                <option>Water</option>[m
[32m+[m[32m                                <option>Sanitation</option>[m
[32m+[m[32m                                <option>Electricity</option>[m
                             </select>[m
 [m
                         </div>[m
 [m
[31m-[m
[31m-                        {/* STATUS */}[m
[31m-[m
                         <div className="filter-group">[m
 [m
                             <label>[m
[36m@@ -425,30 +230,14 @@[m [mfunction AdminDashboard() {[m
                             </label>[m
 [m
                             <select>[m
[31m-[m
[31m-                                <option>[m
[31m-                                    All Status[m
[31m-                                </option>[m
[31m-[m
[31m-                                <option>[m
[31m-                                    Open[m
[31m-                                </option>[m
[31m-[m
[31m-                                <option>[m
[31m-                                    In Progress[m
[31m-                                </option>[m
[31m-[m
[31m-                                <option>[m
[31m-                                    Resolved[m
[31m-                                </option>[m
[31m-[m
[32m+[m[32m                                <option>All Status</option>[m
[32m+[m[32m                                <option>Open</option>[m
[32m+[m[32m                                <option>In Progress</option>[m
[32m+[m[32m                                <option>Resolved</option>[m
                             </select>[m
 [m
                         </div>[m
 [m
[31m-[m
[31m-                        {/* PRIORITY */}[m
[31m-[m
                         <div className="filter-group">[m
 [m
                             <label>[m
[36m@@ -456,30 +245,14 @@[m [mfunction AdminDashboard() {[m
                             </label>[m
 [m
                             <select>[m
[31m-[m
[31m-                                <option>[m
[31m-                                    All Priorities[m
[31m-                                </option>[m
[31m-[m
[31m-                                <option>[m
[31m-                                    High[m
[31m-                                </option>[m
[31m-[m
[31m-                                <option>[m
[31m-                                    Medium[m
[31m-                                </option>[m
[31m-[m
[31m-                                <option>[m
[31m-                                    Low[m
[31m-                                </option>[m
[31m-[m
[32m+[m[32m                                <option>All Priorities</option>[m
[32m+[m[32m                                <option>High</option>[m
[32m+[m[32m                                <option>Medium</option>[m
[32m+[m[32m                                <option>Low</option>[m
                             </select>[m
 [m
                         </div>[m
 [m
[31m-[m
[31m-                        {/* DEPARTMENT */}[m
[31m-[m
                         <div className="filter-group">[m
 [m
                             <label>[m
[36m@@ -487,51 +260,29 @@[m [mfunction AdminDashboard() {[m
                             </label>[m
 [m
                             <select>[m
[31m-[m
[31m-                                <option>[m
[31m-                                    All Departments[m
[31m-                                </option>[m
[31m-[m
[31m-                                <option>[m
[31m-                                    Road Department[m
[31m-                                </option>[m
[31m-[m
[31m-                                <option>[m
[31m-                                    Water Department[m
[31m-                                </option>[m
[31m-[m
[31m-                                <option>[m
[31m-                                    Sanitation[m
[31m-                                </option>[m
[31m-[m
[32m+[m[32m                                <option>All Departments</option>[m
[32m+[m[32m                                <option>Road Department</option>[m
[32m+[m[32m                                <option>Water Department</option>[m
[32m+[m[32m                                <option>Sanitation</option>[m
                             </select>[m
 [m
                         </div>[m
 [m
[31m-[m
                         <button className="filter-button">[m
                             Apply[m
                         </button>[m
 [m
                     </section>[m
 [m
[31m-[m
[31m-                    {/* =========================[m
[31m-                        COMPLAINTS[m
[31m-                    ========================= */}[m
[31m-[m
[32m+[m[32m                    {/* COMPLAINTS */}[m
                     <section[m
                         className="complaints-card"[m
                         id="complaints"[m
                     >[m
 [m
[31m-[m
[31m-                        {/* TABLE HEADER */}[m
[31m-[m
                         <div className="table-header">[m
 [m
                             <div>[m
[31m-[m
                                 <h2>[m
                                     Recent Complaints[m
                                 </h2>[m
[36m@@ -539,73 +290,37 @@[m [mfunction AdminDashboard() {[m
                                 <p>[m
                                     Manage and monitor submitted complaints.[m
                                 </p>[m
[31m-[m
                             </div>[m
 [m
[31m-[m
                             <button className="export-button">[m
                                 ⬇ Export[m
                             </button>[m
 [m
                         </div>[m
 [m
[31m-[m
[31m-                        {/* TABLE */}[m
[31m-[m
                         <div className="table-wrapper">[m
 [m
                             <table>[m
 [m
                                 <thead>[m
[31m-[m
                                     <tr>[m
[31m-[m
[31m-                                        <th>[m
[31m-                                            User[m
[31m-                                        </th>[m
[31m-[m
[31m-                                        <th>[m
[31m-                                            Complaint[m
[31m-                                        </th>[m
[31m-[m
[31m-                                        <th>[m
[31m-                                            Category[m
[31m-                                        </th>[m
[31m-[m
[31m-                                        <th>[m
[31m-                                            Priority[m
[31m-                                        </th>[m
[31m-[m
[31m-                                        <th>[m
[31m-                                            Status[m
[31m-                                        </th>[m
[31m-[m
[31m-                                        <th>[m
[31m-                                            Department[m
[31m-                                        </th>[m
[31m-[m
[31m-                                        <th>[m
[31m-                                            Date[m
[31m-                                        </th>[m
[31m-[m
[31m-                                        <th>[m
[31m-                                            Action[m
[31m-                                        </th>[m
[31m-[m
[32m+[m[32m                                        <th>User</th>[m
[32m+[m[32m                                        <th>Complaint</th>[m
[32m+[m[32m                                        <th>Category</th>[m
[32m+[m[32m                                        <th>Priority</th>[m
[32m+[m[32m                                        <th>Status</th>[m
[32m+[m[32m                                        <th>Department</th>[m
[32m+[m[32m                                        <th>Date</th>[m
[32m+[m[32m                                        <th>Action</th>[m
                                     </tr>[m
[31m-[m
                                 </thead>[m
 [m
[31m-[m
                                 <tbody>[m
 [m
[31m-[m
                                     {/* ROW 1 */}[m
[31m-[m
                                     <tr>[m
 [m
                                         <td>[m
[31m-[m
                                             <div className="user-cell">[m
 [m
                                                 <div className="user-avatar">[m
[36m@@ -617,87 +332,59 @@[m [mfunction AdminDashboard() {[m
                                                 </strong>[m
 [m
                                             </div>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <div className="complaint-name">[m
                                                 Road damage near school[m
                                             </div>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <span className="category-badge road">[m
                                                 Road[m
                                             </span>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <span className="priority-badge high">[m
                                                 High[m
                                             </span>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <span className="status-badge open">[m
                                                 Open[m
                                             </span>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <div className="department-cell">[m
                                                 🛣️ Road Department[m
                                             </div>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <div className="date-cell">[m
[31m-[m
                                                 Aug 10[m
[31m-[m
                                                 <small>[m
                                                     10:30 AM[m
                                                 </small>[m
[31m-[m
                                             </div>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <button className="view-button">[m
                                                 View[m
                                             </button>[m
[31m-[m
                                         </td>[m
 [m
                                     </tr>[m
 [m
[31m-[m
                                     {/* ROW 2 */}[m
[31m-[m
                                     <tr>[m
 [m
                                         <td>[m
[31m-[m
                                             <div className="user-cell">[m
 [m
                                                 <div className="user-avatar">[m
[36m@@ -709,87 +396,59 @@[m [mfunction AdminDashboard() {[m
                                                 </strong>[m
 [m
                                             </div>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <div className="complaint-name">[m
                                                 Water leakage[m
                                             </div>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <span className="category-badge water">[m
                                                 Water[m
                                             </span>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <span className="priority-badge medium">[m
                                                 Medium[m
                                             </span>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <span className="status-badge in-progress">[m
                                                 In Progress[m
                                             </span>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <div className="department-cell">[m
                                                 💧 Water Department[m
                                             </div>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <div className="date-cell">[m
[31m-[m
                                                 Aug 8[m
[31m-[m
                                                 <small>[m
                                                     02:15 PM[m
                                                 </small>[m
[31m-[m
                                             </div>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <button className="view-button">[m
                                                 View[m
                                             </button>[m
[31m-[m
                                         </td>[m
 [m
                                     </tr>[m
 [m
[31m-[m
                                     {/* ROW 3 */}[m
[31m-[m
                                     <tr>[m
 [m
                                         <td>[m
[31m-[m
                                             <div className="user-cell">[m
 [m
                                                 <div className="user-avatar">[m
[36m@@ -801,76 +460,51 @@[m [mfunction AdminDashboard() {[m
                                                 </strong>[m
 [m
                                             </div>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <div className="complaint-name">[m
                                                 Garbage collection issue[m
                                             </div>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <span className="category-badge sanitation">[m
                                                 Sanitation[m
                                             </span>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <span className="priority-badge low">[m
                                                 Low[m
                                             </span>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <span className="status-badge resolved">[m
                                                 Resolved[m
                                             </span>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <div className="department-cell">[m
                                                 🗑️ Sanitation[m
                                             </div>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <div className="date-cell">[m
[31m-[m
                                                 Aug 2[m
[31m-[m
                                                 <small>[m
                                                     09:20 AM[m
                                                 </small>[m
[31m-[m
                                             </div>[m
[31m-[m
                                         </td>[m
 [m
[31m-[m
                                         <td>[m
[31m-[m
                                             <button className="view-button">[m
                                                 View[m
                                             </button>[m
[31m-[m
                                         </td>[m
 [m
                                     </tr>[m
[36m@@ -881,41 +515,25 @@[m [mfunction AdminDashboard() {[m
 [m
                         </div>[m
 [m
[31m-[m
                         {/* PAGINATION */}[m
[31m-[m
                         <div className="pagination">[m
 [m
                             <p>[m
                                 Showing 1–3 of 124 complaints[m
                             </p>[m
 [m
[31m-[m
                             <div className="page-buttons">[m
 [m
[31m-                                <button>[m
[31m-                                    ‹[m
[31m-                                </button>[m
[32m+[m[32m                                <button>‹</button>[m
 [m
                                 <button className="selected">[m
                                     1[m
                                 </button>[m
 [m
[31m-                                <button>[m
[31m-                                    2[m
[31m-                                </button>[m
[31m-[m
[31m-                                <button>[m
[31m-                                    3[m
[31m-                                </button>[m
[31m-[m
[31m-                                <button>[m
[31m-                                    4[m
[31m-                                </button>[m
[31m-[m
[31m-                                <button>[m
[31m-                                    ›[m
[31m-                                </button>[m
[32m+[m[32m                                <button>2</button>[m
[32m+[m[32m                                <button>3</button>[m
[32m+[m[32m                                <button>4</button>[m
[32m+[m[32m                                <button>›</button>[m
 [m
                             </div>[m
 [m
[36m@@ -923,9 +541,7 @@[m [mfunction AdminDashboard() {[m
 [m
                     </section>[m
 [m
[31m-[m
                     {/* FOOTER */}[m
[31m-[m
                     <Footer />[m
 [m
                 </main>[m
[36m@@ -935,4 +551,5 @@[m [mfunction AdminDashboard() {[m
     );[m
 }[m
 [m
[31m-export default AdminDashboard;[m
\ No newline at end of file[m
[32m+[m[32mexport default AdminDashboard;[m
[41m+[m
