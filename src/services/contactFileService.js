import * as FileSystem from 'expo-file-system';
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

export const contactsInit = async () => {
	const contacts = await getAllPhoneContacts();
	const extractedContacts = contacts.map((contact) => {
		let imageUri = '';
		if (contact.image) {
			imageUri = contact.image.uri;
		}
		let phone = '';
		if (contact.phoneNumbers) {
			phone = contact.phoneNumbers.map((phone) => phone.number);
		}

		return {
			id: contact.id,
			data: {
				name: contact.name,
				phoneNumber: phone[0],
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