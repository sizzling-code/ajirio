import mongoose from "mongoose";

const gigSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  payRate: String,
  duration: String,
  urgent: Boolean,
  remote: Boolean,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export default mongoose.model("Gig", gigSchema);
