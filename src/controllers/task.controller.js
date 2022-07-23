const taskModel = require("../models/task.model");

const create = async (req, res) => {
  const task = req.body;
  try {
    const result = await taskModel.create(task);
    if (result.rowCount === 1) {
      res.sendStatus(200);
    } else {
      res.status(500).send("Failed to create task");
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getTasksByBookId = async (req, res) => {
  const bookId = req.params.bookId;
  const result = await taskModel.getTasksByBookId(bookId);
  if(result === undefined) {
    res.sendStatus(404);
  } else {
    res.status(200).send(result);
  }
}

const getTask = async (req, res) => {
  const id = req.params.id;
  const result = await taskModel.getTask(id);
  if(result === undefined) {
    res.sendStatus(404);
  } else {
    res.status(200).send(result);
  }
}

const updateTask = async (req, res) => {
  const task = req.body;
  try {
    const result = await taskModel.updateTask(task);
    if (result === 1) {
      res.sendStatus(200);
    } else {
      res.status(500).send("Failed to update task");
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

const deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await taskModel.deleteTask(id);
    if (result === 1) {
      res.sendStatus(200);
    } else {
      res.status(500).send("Failed to delete task");
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

module.exports = {
  create,
  getTasksByBookId,
  getTask,
  updateTask,
  deleteTask
}