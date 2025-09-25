import mongoose from "mongoose";

const promptSchema = new mongoose.Schema({
  text: { type: String, required: true },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" }
});

const Prompt = mongoose.model("Prompt", promptSchema);
export default Prompt; 
