const knex = require("../knex");

const register = async (user) => {
  return await knex("user").insert({
    email: user.email,
    name: user.name,
    password: user.password,
  });
}

const login = async (user) => {
  return await knex
  .select({
    id: "id",
    email: "email",
    name: "name",
  })
  .from("user")
  .where({ email: user.email })
  .where({ password: user.password })
  .first();
};

const updateUser = async (user) => {
  return await knex("user")
  .update({
    name: user.name,
  })
  .where({ email: user.email })
  .where({ password: user.password })
}

const deleteUser = async (user) => {
  return await knex("user")
  .del()
  .where({ email: user.email })
  .where({ password: user.password })
}

module.exports = {
  register,
  login,
  updateUser,
  deleteUser 
};