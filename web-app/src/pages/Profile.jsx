import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import axiosInstance from "../utils/axiosInstance";
import "./Profile.css";

function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axiosInstance.get("/users/profile");
                setUser(response.data);
            } catch (error) {
                console.error("Profile Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    return (
        <>
            <Header />

            <main className="profile-page">
                <div className="profile-container">

                    <div className="profile-header">
                        <div className="profile-avatar">
                            {user?.role === "admin"
                                ? "A"
                                : user?.username?.charAt(0).toUpperCase()}
                        </div>

                        <h1>
                            {user?.role === "admin"
                                ? "Admin Profile"
                                : "My Profile"}
                        </h1>

                        <p>
                            {user?.role === "admin"
                                ? "Your Voice4All admin account details"
                                : "Your Voice4All account details"}
                        </p>
                    </div>

                    {loading ? (
                        <p className="profile-loading">
                            Loading profile...
                        </p>
                    ) : user ? (
                        <div className="profile-card">

                            <div className="profile-row">
                                <div className="profile-label">
                                    Username
                                </div>

                                <div className="profile-value">
                                    {user.username}
                                </div>
                            </div>

                            <div className="profile-row">
                                <div className="profile-label">
                                    Email
                                </div>

                                <div className="profile-value">
                                    {user.email}
                                </div>
                            </div>

                            <div className="profile-row">
                                <div className="profile-label">
                                    Account Type
                                </div>

                                <div className="profile-value">
                                    <span className="role-badge">
                                        {user.role}
                                    </span>
                                </div>
                            </div>

                        </div>
                    ) : (
                        <p className="profile-error">
                            Could not load profile.
                        </p>
                    )}

                </div>
            </main>

            <Footer />
        </>
    );
}

export default Profile;