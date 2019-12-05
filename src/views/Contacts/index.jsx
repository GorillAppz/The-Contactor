import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import ContactList from '../../components/ContactList';

import { getAllContacts } from '../../services/contactFileService';
import styles from './styles';

const Contacts = ({ navigation }) => {
	StatusBar.setBarStyle('light-content');
	const [sortedContacts, setContacts] = React.useState([]);

	const updateContacts = async () => {
		const contacts = await getAllContacts();
		const sortedContacts = contacts.sort((a, b) => ((a.data.name > b.data.name) ? 1 : -1));
		setContacts(sortedContacts);
	};

	return (
		<SafeAreaView style={{ ...styles.container, ...styles.SafeArea }}>
			<NavigationEvents
				onWillFocus={updateContacts}
			/>
			<ContactList contacts={sortedContacts} updateContacts={updateContacts} />
		</SafeAreaView>
	);
};

Contacts.navigationOptions = {
	header: null
};

export default Contacts;