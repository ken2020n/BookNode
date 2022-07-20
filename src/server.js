const express = require("express");
const knex = require("./knex");

require("dotenv").config();

const setupServer = () => {
  const app = express();
  app.use(express.json());

  app.get("/test", (req, res) => {
    res.send("ok").status(200);
  });

  app.get("/dbtest", async (req, res) => {
    console.log("DB_NAME: ", process.env.DB_NAME);
    console.log("DB_USER: ", process.env.DB_USER);
    let result = await knex.select({
      id: "id",
      email: "email",
      name: "name",
      password: "password",
    })
    .from("user");
    
    console.log(result);
    res.send("ok").status(200);
  });

  return app;
}

module.exports = { setupServer };