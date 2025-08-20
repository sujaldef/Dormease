import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const FILE_PATH = path.join(__dirname, "public", "register.json");

// Read properties
app.get("/register", (req, res) => {
  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading file" });
    res.json(JSON.parse(data));
  });
});

// Save new property
app.post("/register", (req, res) => {
  const newProperty = req.body;

  fs.readFile(FILE_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error reading file" });

    let properties = JSON.parse(data);
    properties.push(newProperty);

    fs.writeFile(FILE_PATH, JSON.stringify(properties, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error saving file" });
      res.json({ message: "Property registered successfully!" });
    });
  });
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
