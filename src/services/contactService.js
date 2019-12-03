import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';

export const getContacts = async () => {
	const { status } = await Permissions.askAsync(Permissions.CONTACTS);
	if (status === 'granted') {
		const { data } = await Contacts.getContactsAsync({
			fields: [Contacts.Fields.Image]
		});
		return data;
	}
};

export const getContactById = async () => {
	const { status } = await Permissions.askAsync(Permissions.CONTACTS);
	if (status === 'granted') {
		const { data } = await Contacts.getContactsAsync();
		return data;
	}
}