const Users = require("../repositories/users");

const signup = async (_req, res, next) => {
  try {
    const result = await Users.listContacts();
    return res.json({ status: "success", code: 200, data: { result } });
  } catch (e) {
    next(e);
  }
};
const login = async (_req, res, next) => {
  try {
    const result = await Users.listContacts();
    return res.json({ status: "success", code: 200, data: { result } });
  } catch (e) {
    next(e);
  }
};
const logout = async (_req, res, next) => {
  try {
    const result = await Users.listContacts();
    return res.json({ status: "success", code: 200, data: { result } });
  } catch (e) {
    next(e);
  }
};

module.exports = { signup, login, logout };
