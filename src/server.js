const express = require("express");
const knex = require("./knex");

const userController = require("./controllers/user.controller");
const bookController = require("./controllers/book.controller");
const taskController = require("./controllers/task.controller");

const setupServer = () => {
  const app = express();
  app.use(express.json());

  app.get("/test", async (req, res) => {
    res.status(200).json({
      message: "API server connection successful.",
    });
  });

  app.get("/dbtest", async (req, res) => {
    let result = await knex.raw(`SELECT 1;`);
    if (result.rowCount === 1) {
      res.status(200).json({
        message: "Database connection successful.",
      });
    } else {
      res.status(500).json({
        message: "Failed to connect to database .",
      });
    }
  });

  // user
  app.post("/register", userController.register);
  app.post("/login", userController.login);
  app.get("/user/:id", userController.getUser);
  app.patch("/user", userController.updateUser);
  app.delete("/user", userController.deleteUser);

  // book
  app.post("/book/create", bookController.create);
  app.get("/books/:userId", bookController.getBooksByUserId);
  app.get("/book/:id", bookController.getBook);
  app.patch("/book/update", bookController.updateBook);
  app.delete("/book/delete/:id", bookController.deleteBook);

  // task
  app.post("/task/create", taskController.create);
  app.get("/tasks/:bookId", taskController.getTasksByBookId);
  app.get("/task/:id", taskController.getTask);
  app.patch("/task/update", taskController.updateTask);
  app.delete("/task/delete/:id", taskController.deleteTask);

  return app;
};

module.exports = { setupServer };
