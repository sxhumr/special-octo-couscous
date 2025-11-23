const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
console.log("Mongo URI From .env", process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());

const taksRoutes = require ("./routes/taskRoutes");
app.use("/tasks", taskRoutes);  

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Task Manager Backend is running 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);
