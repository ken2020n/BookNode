const userModel = require("../models/user.model");

const register = async (req, res) => {
  const user = req.body;
  try {
    const result = await userModel.register(user);
    if (result.rowCount === 1) {
      res.sendStatus(200);
    } else {
      res.status(500).send("Failed to register");
    }
  } catch (err) {
    console.error(err);
    // todo: check if user has already registered
    res.sendStatus(500);
  }
};

const login = async (req, res) => {
  const user = req.body;
  const result = await userModel.login(user);
  if(result === undefined) {
    res.sendStatus(401);
  } else {
    res.status(200).send(result);
  }
};

const updateUser = async (req, res) => {
  const user = req.body;
  try {
    const result = await userModel.updateUser(user);
    if (result === 1) {
      res.sendStatus(200);
    } else {
      res.status(500).send("Failed to update user");
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const deleteUser = async (req, res) => {
  // const user = req.body;
  // try {
  //   const result = await userModel.deleteUser(user);
  //   if (result === 1) {
  //     res.sendStatus(200);
  //   } else {
  //     res.status(500).send("Failed to delete user");
  //   }
  // } catch (err) {
  //   console.error(err);
  //   res.sendStatus(500);
  // }
};

module.exports = {
  register,
  login,
  updateUser,
  deleteUser
};