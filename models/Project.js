import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  prompts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Prompt" }],
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);
export default Project;  
