import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const newContacts = [];
  for (let index = 0; index < number; index++) {
    newContacts.push(createFakeContact());
  }

  await writeContacts(newContacts);
};

generateContacts(5);
