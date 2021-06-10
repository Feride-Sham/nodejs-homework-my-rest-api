const express = require("express");
const router = express.Router();
const ctrl = require("../../../controllers/users");

// const {
//   validationAddContact,
//   validationUpdateContact,
//   validationUpdateContactStatus,
//   validateMongoID,
// } = require("./validation");

router.post("/signup", ctrl.signup);
router.post("/login", ctrl.login);
router.post("/logout", ctrl.logout);

// router.get("/current", ctrl.current);

module.exports = router;
