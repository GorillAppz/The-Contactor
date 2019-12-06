import { getAllContacts } from '../services/contactFileService';

import { clearStorage } from '../services/contactFileService';

const isNumber = (char) => !Number.isNaN(char - parseFloat(char));

export const groupContacts = (contacts) => {
	const groupedObj = contacts.reduce((obj, contact) => {
		let firstChar = contact.data.name.charAt(0).toUpperCase();

		if (isNumber(firstChar)) {
			firstChar = '#';
		}
		const newObj = { ...obj };

		if (!newObj[firstChar]) {
			newObj[firstChar] = [contact];
			return newObj;
		}

		newObj[firstChar] = [...newObj[firstChar], contact];
		return newObj;
	}, {});

	return Object.keys(groupedObj).map((key) => ({ title: key, data: [...groupedObj[key]] }));
};

export const validateContact = (values) => {
	const errors = {};

	if (!values.name) {
		errors.name = 'Name is required!';
	} else if (values.name.length < 3) {
		errors.name = 'Name must be atleast 3 characters!';
	}

	if (!values.phoneNumber) {
		errors.phoneNumber = 'Phone number is required!';
	}

	if (!values.image) {
		errors.image = 'Please insert your image';
	}

	return errors;
};

export const updateAndGetContactList = async () => {
	const contacts = await getAllContacts();
	const sortedContacts = contacts.sort((a, b) => ((a.data.name > b.data.name) ? 1 : -1));
	return sortedContacts;
	// comment above and uncomment below to clearStorage
	// await clearStorage();
}