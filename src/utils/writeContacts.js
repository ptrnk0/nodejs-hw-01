import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const contacts = await readContacts();
    await fs.writeFile(
      PATH_DB,
      JSON.stringify([...contacts, ...updatedContacts]),
    );
  } catch (error) {
    console.error(error);
  }
};
