const express = require("express");
const router = express.Router();
const ctrl = require("../../../controllers/users");

// const {
//   validationAddContact,
//   validationUpdateContact,
//   validationUpdateContactStatus,
//   validateMongoID,
// } = require("./validation");

router.post("/users/signup", ctrl.signup);
router.post("/users/login", ctrl.login);
router.post("/users/logout", ctrl.logout);

// router.get("/users/current", ctrl.current);

module.exports = router;
