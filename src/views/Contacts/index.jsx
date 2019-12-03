import React from 'react';
import { SafeAreaView } from 'react-native';
import ContactList from '../../components/ContactList';

import { getContacts } from '../../services/contactService';

import styles from './styles';

const Contacts = () => {
	const [contacts, setContacts] = React.useState([]);

	React.useEffect(() => {
		(async () => {
			const contactsRetrieved = await getContacts();


			const filterOutNoNames = contactsRetrieved.filter((x) => x.name && x !== undefined);

			const sortedContacts = filterOutNoNames.sort((a, b) => ((a.name > b.name) ? 1 : -1));
			setContacts(sortedContacts);
		})();
	}, []);

	return (
		<SafeAreaView style={styles.container, styles.SafeArea}>
			<ContactList contacts={contacts} />
		</SafeAreaView>
	);
}

Contacts.navigationOptions = {
	header: null
};

export default Contacts;