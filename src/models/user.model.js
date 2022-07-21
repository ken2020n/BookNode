const knex = require("../knex");

const getAllUsers = async () => {
  // return await knex
  // .select({
  //   id: "id",
  //   email: "email",
  //   name: "name",
  //   password: "password",
  // })
  // .from("user");
};

const getUserByEmail = async (email) => {
  // return await knex
  // .select({
  //   id: "id",
  //   email: "email",
  //   name: "name",
  //   password: "password",
  // })
  // .from("user")
  // .where({ email: email });
};

const createUser = async () => {
}

const updateUser = async () => {
}

const deleteUser = async () => {
}

module.exports = {
  getAllUsers,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser
};