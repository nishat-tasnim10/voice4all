import Submit from "../model/submit.js";

import cloudinary from "../config/cloudinary.js";



// CREATE COMPLAINT


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


// GET COMPLAINTS


export const getComplaints = async (req, res) => {

  try {

    let complaints;


    
    // ADMIN
   

    if (req.user.role === "admin") {

      // Admin sees ALL complaints

      complaints = await Submit.find()
        .populate("user", "username email")
        .sort({ createdAt: -1 });

    }


    
    // USER
  

    else {

      // User sees ONLY their own complaints

      complaints = await Submit.find({
        user: req.user.id,
      })
        .populate("user", "username email")
        .sort({ createdAt: -1 });

    }


    return res.status(200).json(complaints);

  } catch (error) {

    console.error("Get Complaints Error:", error);

    return res.status(500).json({

      message: "Failed to load complaints",

      error: error.message,

    });

  }

};