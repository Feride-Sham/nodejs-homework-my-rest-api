const db = require("./db");
const { ObjectID } = require("mongodb");

// const contactsPath = path.join(__dirname, "contacts.json");

const getCollection = async (db, name) => {
  const client = await db;
  const collection = await client.db().collection(name);
  return collection;
};

const listContacts = async () => {
  const collection = await getCollection(db, "contacts");
  const results = await collection.find({}).toArray();
  return results;
};

const getContactById = async (contactId) => {
  const collection = await getCollection(db, "contacts");
  const objectID = new ObjectID(contactId);
  const [result] = await collection.find({ _id: objectID }).toArray();
  return result;
  // const contacts = await readContacts();
  // return contacts.find((el) => String(contactId) === String(el.id));
};

const removeContact = async (contactId) => {
  const collection = await getCollection(db, "contacts");
  const objectID = new ObjectID(contactId);
  const { value: result } = await collection.findOneAndDelete({
    _id: objectID,
  });
  return result;
  // const contacts = await readContacts();
  // const deletedContact = contacts.find(
  //   (el) => String(contactId) === String(el.id)
  // );
  // if (deletedContact) {
  //   const index = contacts.indexOf(deletedContact);
  //   contacts.splice(index, 1);

  //   await fs.writeFile(contactsPath, JSON.stringify(contacts));
  //   return deletedContact;
  // }
  // return null;
};

const addContact = async (body) => {
  const collection = await getCollection(db, "contacts");

  const newContact = {
    ...body,
  };
  const {
    ops: [result],
  } = await collection.insertOne(newContact);
  return result;
  // const contacts = await readContacts();
  // contacts.push(newContact);
  // await fs.writeFile(contactsPath, JSON.stringify(contacts));
  // return newContact;
};

const updateContact = async (contactId, body) => {
  const collection = await getCollection(db, "contacts");
  const objectID = new ObjectID(contactId);
  const { value: result } = await collection.findOneAndUpdate(
    { _id: objectID },
    { $set: body },
    { returnOriginal: false }
  );
  return result;
  // const contacts = await readContacts();
  // const [result] = contacts.filter((el) => String(contactId) === String(el.id));
  // if (result) {
  //   Object.assign(result, body);
  //   await fs.writeFile(contactsPath, JSON.stringify(contacts));
  // }
  // return result;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
