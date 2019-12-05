import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import ContactList from '../../components/ContactList';

import { getAllContacts } from '../../services/contactFileService';
import styles from './styles';

import { clearStorage } from '../../services/contactFileService';


const Contacts = () => {
	StatusBar.setBarStyle('light-content');
	const [sortedContacts, setContacts] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(false);

	const updateContacts = async () => {
		setIsLoading(true);
		const contacts = await getAllContacts();
		const sortedContacts = contacts.sort((a, b) => ((a.data.name > b.data.name) ? 1 : -1));
		setContacts(sortedContacts);
		setIsLoading(false);

		// comment above and uncomment below to clearStorage
		// await clearStorage();
	};

	// clearStorage();

	return (
		<SafeAreaView style={{ ...styles.container, ...styles.SafeArea }}>
			<NavigationEvents
				onWillFocus={updateContacts}
			/>

			<ContactList contacts={sortedContacts} updateContacts={updateContacts} isLoading={isLoading} />

		</SafeAreaView>
	);
};

Contacts.navigationOptions = {
	header: null
};

export default Contacts;