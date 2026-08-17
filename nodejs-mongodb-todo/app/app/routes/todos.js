const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// GET /todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /todos
router.post("/", async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
      completed: req.body.completed || false
    });

    const savedTodo = await todo.save();

    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /todos/:id
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found"
      });
    }

    res.json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT /todos/:id
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found"
      });
    }

    res.json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /todos/:id
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found"
      });
    }

    res.json({
      message: "Todo deleted successfully"
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
