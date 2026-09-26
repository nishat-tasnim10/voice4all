import User from "../model/user.js";
import { comparePassword } from "../utils/helpers.js";
import jwt from "jsonwebtoken";

const lifetime = "3600000";


export const login = async (req, res) => {

  try {

    const { username, password } = req.body;


    console.log("Username from frontend:", username);
    console.log("Password from frontend:", password);



    // Find user from database
    const user = await User.findOne({ username })
      .select(["-__v"]);



    console.log("User from database:", user);



    if (!user) {

      return res.status(404).json({
        error: "User not found"
      });

    }



    // Check password
    const isSame = await comparePassword(
      password,
      user.password
    );



    console.log("Password matched:", isSame);



    if (!isSame) {

      return res.status(400).json({
        error: "Wrong password"
      });

    }



    // Create JWT token
    const token = jwt.sign(

      {
        id: user.id,
        username: user.username,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: lifetime
      }

    );




    // Cookie for localhost
    res.cookie("token", token, {

      maxAge: Number(lifetime),

      httpOnly: true,

      secure: false,

      sameSite: "lax",

      path: "/"

    });




    return res.status(200).json({

      message: "Login successful",

      user: {

        id: user.id,

        username: user.username,

        email: user.email

      }

    });



  } catch (error) {


    console.log("Login Error:", error);


    return res.status(500).json({

      error: "Server error"

    });


  }

};





export const logout = (req, res) => {


  res.clearCookie("token", {

    httpOnly: true,

    secure: false,

    sameSite: "lax",

    path: "/"

  });



  return res.status(200).json({

    message: "Logout successful"

  });


};