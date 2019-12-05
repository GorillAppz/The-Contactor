export const isNumber = (char) => !Number.isNaN(char - parseFloat(char));


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

	const groupedArray = Object.keys(groupedObj).map((key) => ({ title: key, data: [...groupedObj[key]] }));

	return groupedArray;
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