const userModel = require("../models/user.model");

const register = async (req, res) => {
  const user = req.body;
  try {
    const result = await userModel.register(user);
    console.log(result.rowCount);
    if (result.rowCount === 1) {
      res.sendStatus(200);
    } else {
      return "Failed to register.";
    }
  } catch (err) {
    console.error(err);
    // todo: check if user has already registered
    res.sendStatus(500);
  }
};

const login = async (req, res) => {
  const user = req.body;
  console.log(user);
  const result = await userModel.login(user);
  console.log(result);
  if(result === undefined) {
    res.sendStatus(401);
  } else {
    res.status(200).send(result);
  }
};

const getAllUsers = async (req, res) => {
  const allUsers = await userModel.getAllUsers();
  res.send(allUsers).status(200);
};

const getUserByEmail = async (req, res) => {
  const email = req.body.email;
  console.log(email);
  const user = await userModel.getUserByEmail(email);
  console.log(user);
  // res.send("xx").status(200);
};

const createUser = async (req, res) => {
  // const user = req.params;
  // const result = await userModel.createUser(user);
  // console.log(result);

  // res.send("create").status(200);
};

const updateUser = async (req, res) => {
  res.send(user).status(200);
};

const deleteUser = async (req, res) => {
  res.send(user).status(200);
};

module.exports = {
  register,
  login,
  getAllUsers,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser
};