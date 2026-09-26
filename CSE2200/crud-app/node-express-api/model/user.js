import { Schema, model } from "mongoose";

const userSchema = new Schema({

  username: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
email: { 
  type: Schema.Types.String,
   required: true, 
   unique: true,
   },
  displayName: Schema.Types.String,

  password: {
    type: Schema.Types.String,
    required: true,
  },

  role: {
    type: Schema.Types.String,
    enum: ["user", "admin"],
    default: "user",
  },

});

const User = model("User", userSchema);

export default User;