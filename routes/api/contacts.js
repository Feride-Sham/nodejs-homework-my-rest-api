const express = require("express");
const router = express.Router();
const Contacts = require("../../model");

router.get("/", async (req, res, next) => {
  try {
    const result = await Contacts.listContacts();
    return res.json({ status: "success", code: 200, data: { result } });
  } catch (e) {
    next(e);
  }
});

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.patch("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
