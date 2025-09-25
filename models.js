const mongoose = require("./lib/db");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});

const projectSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: String
});

const promptSchema = new mongoose.Schema({
  projectId: mongoose.Schema.Types.ObjectId,
  prompt: String
});

const chatSchema = new mongoose.Schema({
  projectId: mongoose.Schema.Types.ObjectId,
  userMessage: String,
  botResponse: String
});

module.exports = {
  User: mongoose.model("User", userSchema),
  Project: mongoose.model("Project", projectSchema),
  Prompt: mongoose.model("Prompt", promptSchema),
  Chat: mongoose.model("Chat", chatSchema)
};
