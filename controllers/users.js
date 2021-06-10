const Users = require("../repositories/users");
const { HttpCode } = require("../helpers/constants");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const signup = async (req, res, next) => {
  try {
    const result = await Users.findUserByEmail(req.body.email);
    if (result) {
      return res.status(HttpCode.CONFLICT).json({
        status: "error",
        code: HttpCode.CONFLICT,
        message: "Email in use",
      });
    }
    const { id, email, subscription } = await Users.cteateUser(req.body);

    return res.status(HttpCode.CREATED).json({
      status: "success",
      code: HttpCode.CREATED,
      data: { id, email, subscription },
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await Users.findUserByEmail(req.body.email);
    const isValidPassword = await result?.isValidPassword(req.body.password);
    if (!result || !isValidPassword) {
      console.log(isValidPassword);
      return res.status(HttpCode.UNAUTHORIZED).json({
        status: "error",
        code: HttpCode.UNAUTHORIZED,
        message: "Email or password is wrong",
      });
    }

    const id = result.id;
    const payload = { id, test: "bla-bla" };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "2h" });

    await Users.updateToken(id, token);
    return res.json({ status: "success", code: HttpCode.OK, data: { token } });
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
