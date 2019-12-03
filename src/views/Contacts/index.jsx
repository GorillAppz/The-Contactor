import React from 'react';
import { SafeAreaView } from 'react-native';
import ContactList from '../../components/ContactList';

import { getAllContacts } from '../../services/contactFileService';
import styles from './styles';

const Contacts = () => {
	const [sortedContacts, setContacts] = React.useState([]);

	React.useEffect(() => {
		(async () => {
			const contacts = await getAllContacts();
			const sortedContacts = contacts.sort((a, b) => ((a.data.name > b.data.name) ? 1 : -1));
			setContacts(sortedContacts);
		})();
	}, []);

	return (
		<SafeAreaView style={{ ...styles.container, ...styles.SafeArea }}>
			<ContactList contacts={sortedContacts} />
		</SafeAreaView>
	);
};

Contacts.navigationOptions = {
	header: null
};

export default Contacts;