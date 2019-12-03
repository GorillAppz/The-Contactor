export const isNumber = (char) => {
	return !Number.isNaN(char - parseFloat(char));
};

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

	const groupedArray = Object.keys(groupedObj).map((key) => {
		return { title: key, data: [...groupedObj[key]] };
	});

	return groupedArray;
};