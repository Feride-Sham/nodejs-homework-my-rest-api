const express = require("express");
const router = express.Router();
// const {
//   validationAddContact,
//   validationUpdateContact,
//   validationUpdateContactStatus,
//   validateMongoID,
// } = require("./validation");

router.use("/users", require("./users"));
router.use("/contacts", require("./contacts"));

// router.get("/current", ctrl.current);

module.exports = router;
