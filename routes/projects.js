import express from "express";
import { protect } from "../middleware/auth.js";
import Project from "../models/Project.js";
import Prompt from "../models/Prompt.js";
import fetch from "node-fetch";

const router = express.Router();

// Create Project
router.post("/", protect, async (req, res) => {
  const { name } = req.body;
  try {
    const project = await Project.create({ name, owner: req.user.id });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add Prompt
router.post("/:projectId/prompts", protect, async (req, res) => {
  const { text } = req.body;
  try {
    const prompt = await Prompt.create({ text, project: req.params.projectId });
    await Project.findByIdAndUpdate(req.params.projectId, { $push: { prompts: prompt._id } });
    res.json(prompt);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Chat with LLM
router.post("/:projectId/chat", protect, async (req, res) => {
  const { message } = req.body;

  try {
    // Example with OpenAI Responses API
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: message
      })
    });

    const data = await response.json();
    res.json({ reply: data.output_text || "No response" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
