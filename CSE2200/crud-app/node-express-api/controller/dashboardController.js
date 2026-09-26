import Submit from "../model/submit.js";

export const getDashboardData = async (req, res) => {
    try {
        const userId = req.user.id;

        const totalComplaints = await Submit.countDocuments({
            user: userId,
        });

        const pendingComplaints = await Submit.countDocuments({
            user: userId,
            status: "pending",
        });

        const resolvedComplaints = await Submit.countDocuments({
            user: userId,
            status: "resolved",
        });

        const recentComplaints = await Submit.find({
            user: userId,
        })
            .sort({ createdAt: -1 })
            .limit(5);

        return res.status(200).json({
            totalComplaints,
            pendingComplaints,
            resolvedComplaints,
            recentComplaints,
        });

    } catch (error) {
        console.error("Dashboard Error:", error);

        return res.status(500).json({
            message: "Failed to load dashboard data",
            error: error.message,
        });
    }
};