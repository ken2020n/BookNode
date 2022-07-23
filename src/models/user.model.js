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

const getAllUsers = async () => {
  return await knex
  .select({
    id: "id",
    email: "email",
    name: "name",
    password: "password",
  })
  .from("user");
};

const getUserByEmail = async (email) => {
  return await knex
  .select({
    id: "id",
    email: "email",
    name: "name",
    password: "password",
  })
  .from("user")
  .where({ email: email });
};

const createUser = async (user) => {
  return knex("test").insert({
    email: user.email,
    name: user.name,
    password: user.password,
  });
}

const updateUser = async () => {
}

const deleteUser = async () => {
}

module.exports = {
  register,
  login,
  getAllUsers,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser
};