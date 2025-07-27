require("dotenv").config();

const Express = require("express");
const Mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");
const Task = require("./models/data");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  signupValidation,
  loginValidation,
  verifyToken,
} = require("./middlewares/authValidation");
const verifyUserSTask = require("./middlewares/varifyUser'sTask");
const { errorMsg } = require("../frontend/src/utils");

const app = Express();
app.use(cors());
app.use(Express.json());

Mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Connected to the DB"))
  .catch((err) => console.error(`❌ DB Error: ${err}`));

app.post("/dashboard", async (req, res) => {
  const { Task } = req.body;
  console.log(Task);
});

app.post("/signup", signupValidation, async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPass = await bcrypt.hash(password, 10);

    const existUser = await User.findOne({ email });
    if (existUser)
      return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ username, email, password: hashedPass });
    const savedUser = await newUser.save();

    const token = jwt.sign(
      {
        id: savedUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    res.status(201).json({
      message: "Signup successful",
      success: true,
      token,
      user: {
        id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
      },
      username: newUser.username,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/login", loginValidation, async (req, res) => {
  const { email, password } = req.body;

  try {
    const existUser = await User.findOne({ email });
    if (!existUser)
      return res
        .status(400)
        .json({ message: "User not exists. Signup instead." });

    const isPassCorrect = await bcrypt.compare(password, existUser.password);
    if (!isPassCorrect) {
      return res.status(403).json({
        message: "Incorrect Password",
        success: false,
      });
    }

    const token = jwt.sign(
      { id: existUser._id, email: existUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.status(201).json({
      message: "Login successful",
      success: true,
      token,
      user: {
        id: existUser._id,
        username: existUser.username,
        email: existUser.email,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: "Internal server error",
      error: err.message,
    });
  }
});

app.post("/task", verifyUserSTask, async (req, res) => {
  const { title, starred, isComp, date } = req.body;
  if (date === null) {
    console.error("Date is note define");
  }
  try {
    const newTask = new Task({
      title,
      starred,
      isComp,
      userId: req.user.id,
      date,
    });

    await newTask.save();
    res.status(201).json({
      message: "New Task added successfully",
      success: true,
      task: newTask,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error while adding task",
      success: false,
      error: err.message,
    });
  }
});

app.get("/task", verifyToken, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.status(200).json({
      message: "Tasks fetched successfully",
      success: true,
      tasks: tasks,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/imp-tasks", async (req, res) => {
  try {
    const impTasks = await Task.find({ starred: true });

    res.status(200).json({
      message: "Important Task fetch successfully",
      success: true,
      task: impTasks
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.patch("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task updated successfully",
      success: true,
      task: updatedTask,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteTask = await Task.findByIdAndDelete(id);
    if (!deleteTask) {
      res.status(404).json({
        message: "Task not found",
        success: false,
      });
    }

    res.status(201).json({
      message: "Task deleted successfully",
      success: true,
      task: deleteTask,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error while delete the Task",
      success: false,
      error: err.message,
    });
  }
});

app.get("/dashboard", verifyToken, (req, res) => {
  res.status(200).json({ message: "Welcome to your Dashboard" });
});

app.listen(1000, () => {
  console.log("🚀 Server is started on port 1000");
});
