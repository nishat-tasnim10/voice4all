import mongoose from "mongoose";

const submitSchema = new mongoose.Schema({

  subject: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  department: {
    type: String,
    required: true,
  },

  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    required: true,
  },

  image: {
    type: String,
    default: null,
  },

  status: {
    type: String,
    default: "pending",
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

}, {
  timestamps: true,
});

const Submit = mongoose.model("Submit", submitSchema);

export default Submit;