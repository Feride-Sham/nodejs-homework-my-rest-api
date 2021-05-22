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
  try {
    const result = await Contacts.getContactById(req.params.contactId);
    if (result) {
      return res.json({ status: "success", code: 200, data: { result } });
    }
    return res.json({ status: "errore", code: 404, message: "Not found" });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const contact = await Contacts.addContact(req.body);
    return res
      .status(201)
      .json({ status: "success", code: 201, data: { contact } });
  } catch (e) {
    next(e);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const result = await Contacts.removeContact(req.params.contactId);
    if (result) {
      return res.json({
        status: "success",
        code: 200,
        message: "Contact deleted",
        data: { result },
      });
    }
    return res.json({ status: "errore", code: 404, message: "Not found" });
  } catch (e) {
    next(e);
  }
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
