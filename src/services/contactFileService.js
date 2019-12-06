import * as FileSystem from 'expo-file-system';
import uuidv4 from 'uuid/v4';

import { getAllPhoneContacts } from './contactExpoService';


const contactDirectory = `${FileSystem.documentDirectory}contacts`;
console.log(contactDirectory);
const onException = (cb, errorHandler) => {
	try {
		return cb();
	} catch (err) {
		if (errorHandler) {
			return errorHandler(err);
		}
		console.error(err);
	}
};

export const addContact = async (contact, id) => {
	await onException(() => FileSystem.writeAsStringAsync(
		`${contactDirectory}/${id}.json`, JSON.stringify(contact)
	));
};

export const createContact = async (contact) => {
	const id = uuidv4();
	addContact(contact, id);
};

export const importContactsFromPhone = async () => {
	const contacts = await getAllPhoneContacts();
	const contactsWithDefinedName = contacts.filter((contact) => contact.name !== undefined);
	const nonEmialContacts = contactsWithDefinedName.filter((contact) => contact.phoneNumbers);
	const extractedContacts = nonEmialContacts.map((contact) => {
		let imageUri = '';
		if (contact.image) {
			imageUri = contact.image.uri;
		}

		return {
			id: contact.id,
			data: {
				name: contact.name,
				phoneNumber: contact.phoneNumbers[0].digits,
				image: imageUri
			}
		};
	});

	extractedContacts.map((contact) => addContact(contact.data, contact.id));
};

const setupDirectory = async () => {
	const dir = await FileSystem.getInfoAsync(contactDirectory);
	if (!dir.exists) {
		await FileSystem.makeDirectoryAsync(contactDirectory);
	}
};

export const loadContact = async (fileName) => (
	onException(() => FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`))
);

export const removeContact = async (fileName) => (
	onException(() => FileSystem.deleteAsync(`${contactDirectory}/${fileName}`, { idempotent: true }))
);

export const getAllContacts = async () => {
	// Check if directory exists
	await setupDirectory();
	// delete broken file, uncomment and change file name
	// await FileSystem.deleteAsync(`${contactDirectory}/8513C88F-1EFA-49CD-B061-9F49F8816562.json`)


	const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
	return Promise.all(result.map(async (fileName) => ({
		id: fileName.split('.')[0],
		data: JSON.parse(await loadContact(fileName))
	})));
};

export const getContactById = async (contactId) => {
	const contacts = await getAllContacts();
	const contact = contacts.find((c) => c.id === contactId);

	return contact;
};

export const updateContact = async (contact) => {
	removeContact(`${contact.id}.json`);
	addContact(contact.data, contact.id);
};

// used for development, to delete local storage
export const clearStorage = async () => {
	await setupDirectory();
	const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
	return Promise.all(result.forEach(async (fileName) => {
		await FileSystem.deleteAsync(`${contactDirectory}/${fileName}`);
	}));
};