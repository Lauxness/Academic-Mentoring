const User = require("../models/userModel");

const GetUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    console.error(err);
  }
};
const AddUser = async (req, res) => {
  const user = req.body;
  try {
    const newUser = await User.create(user);
    return res.status(200).json({ message: "User successfully created!" });
  } catch (err) {
    console.error(err);
  }
};
const DeleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    return res.status(200).json({ message: "User successfully deleted!" });
  } catch (err) {
    console.error(err);
  }
};
const UpdateUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    });
    return res.status(200).json({ message: "User updated!" });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { GetUsers, AddUser, DeleteUser, UpdateUser };
