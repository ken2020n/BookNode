const express = require("express");
require("dotenv").config();

const setupServer = () => {
  const app = express();
  app.use(express.json());
  app.get("/test", (req, res) => {
    res.send("ok").status(200);
  });

  app.get("/dbtest", (req, res) => {
    console.log("DB_NAME: ", process.env.DB_NAME);
    res.send("ok").status(200);
  });

  return app;
}

module.exports = { setupServer };