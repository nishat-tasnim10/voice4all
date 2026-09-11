import Submit from "../model/submit.js";

export const createSubmit = async (req, res) => {

    try {

        const {
            subject,
            description,
            department,
            priority,
        } = req.body;

        const submit = await Submit.create({
            subject,
            description,
            department,
            priority,
        });

        return res.status(201).json({
            message: "Complaint submitted successfully",
            submit,
        });

    } catch (error) {

        console.error("Submit Error:", error);

        return res.status(500).json({
            message: "Failed to submit complaint",
            error: error.message,
        });

    }
};