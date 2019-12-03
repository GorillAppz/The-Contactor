import * as FileSystem from 'expo-file-system';
import { getContacts } from './contactService';

const imageDirectory = `${FileSystem.documentDirectory}contacts`;

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
		`${imageDirectory}/${id}.json`, JSON.stringify(contact)
	));
};

export const contactsInit = async () => {
	const contacts = await getContacts();
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
				phoneNumber: phone,
				image: imageUri
			}
		};
	});

	extractedContacts.map((contact) => addContact(contact.data, contact.id));
};