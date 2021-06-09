const User = require("../model/user");

const findUserById = async (id) => await User.findById(id);

const findUserByEmail = async (email) => await User.findOne({ email });

const cteateUser = async (body) => {
  const user = new User(body);
  return await user.save();
};

const updateToken = async (id, token) => {
  return await User.updateOne({ _id: id }, { token });
};

module.exports = { findUserById, findUserByEmail, cteateUser, updateToken };
