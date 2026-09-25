import Submit from "../model/submit.js";


// GET ALL COMPLAINTS
export const getAllComplaints = async (req, res) => {
    try {
        const complaints = await Submit.find()
            .populate("user", "username displayName")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            complaints,
        });

    } catch (error) {
        console.error("Admin Dashboard Error:", error);

        return res.status(500).json({
            message: "Failed to load complaints",
            error: error.message,
        });
    }
};


// UPDATE COMPLAINT STATUS
export const updateComplaintStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        // Only these statuses are allowed
        const allowedStatuses = [
            "pending",
            "in-progress",
            "resolved"
        ];

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
                message: "Invalid status"
            });
        }

        const complaint = await Submit.findByIdAndUpdate(
            id,
            { status: status },
            {
                new: true,
                runValidators: true
            }
        ).populate("user", "username displayName");

        if (!complaint) {
            return res.status(404).json({
                message: "Complaint not found"
            });
        }

        return res.status(200).json({
            message: "Complaint status updated successfully",
            complaint
        });

    } catch (error) {
        console.error("Update Status Error:", error);

        return res.status(500).json({
            message: "Failed to update complaint status",
            error: error.message
        });
    }
};