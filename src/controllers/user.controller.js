const userModel = require("../models/user.model");

const getAllUsers = async (req, res) => {
  // const allUsers = await userModel.getAllusers();
  // res.send(allUsers).status(200);
  res.send(user).status(200);
};

const getUserByEmail = async (req, res) => {
  // const email = req.params.email;
  // const user = await userModel.getUserByEmail(email);
  res.send(user).status(200);
};

const createUser = async (req, res) => {
  res.send(user).status(200);
};

const updateUser = async (req, res) => {
  res.send(user).status(200);
};

const deleteUser = async (req, res) => {
  res.send(user).status(200);
};

module.exports = {
  getAllUsers,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser
};