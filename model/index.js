const fs = require("fs/promises");
const path = require("path");
const { v4: id } = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");

const readContacts = async () => {
  const contacts = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(contacts);
};

const listContacts = async () => {
  return await readContacts();
};

const getContactById = async (contactId) => {};

const removeContact = async (contactId) => {};

const addContact = async (body) => {
  const newContact = {
    id: id(),
    ...body,
  };
  const contacts = await readContacts();
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
