import * as FileSystem from 'expo-file-system';
import uuidv4 from 'uuid/v4';

import { getAllPhoneContacts } from './contactExpoService';


const contactDirectory = `${FileSystem.documentDirectory}contacts`;
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
		let phone = [];
		if (contact.phoneNumbers) {
			phone = contact.phoneNumbers.map((phone) => ({
				phone: phone.digits,
				label: phone.label
			}));
		}

		return {
			id: contact.id,
			data: {
				name: contact.name,
				phoneNumber: phone,
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

export const getAllContacts = async () => {
	// Check if directory exists
	await setupDirectory();

	const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
	return Promise.all(result.map(async (fileName) => ({
		id: fileName.split('.')[0],
		data: JSON.parse(await loadContact(fileName))
	})));
};

// used for development, to delete local storage
export const clearStorage = async () => {
	await setupDirectory();
	const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
	return Promise.all(result.forEach(async (fileName) => {
		await FileSystem.deleteAsync(`${contactDirectory}/${fileName}`);
	}));
};