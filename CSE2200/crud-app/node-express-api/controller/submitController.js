import Submit from "../model/submit.js";

import cloudinary from "../config/cloudinary.js";

export const createSubmit = async (req, res) => {

  try {

    const {
      subject,
      description,
      department,
      priority,
    } = req.body;

    let imageUrl = null;

    if (req.file) {

      const result = await new Promise((resolve, reject) => {

        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "voice4all/complaints",
          },
          (error, result) => {

            if (error) {
              reject(error);
            } else {
              resolve(result);
            }

          }
        );

        uploadStream.end(req.file.buffer);

      });

      imageUrl = result.secure_url;

    }

    const submit = await Submit.create({

      subject,
      description,
      department,
      priority,
      image: imageUrl,

      user: req.user.id,

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