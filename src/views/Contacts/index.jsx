import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import ContactList from '../../components/ContactList';
import ContactsContext from '../../contexts/contactsContext';
import { updateAndGetContactList } from '../../helpers/index';

import styles from './styles';

const Contacts = () => {
	StatusBar.setBarStyle('light-content');
	const { setContacts } = React.useContext(ContactsContext);

	React.useEffect(() => {
		(async () => {
			setContacts({ data: [], isLoading: true });
			const refreshedContacts = await updateAndGetContactList();
			setContacts({ data: refreshedContacts, isLoading: false });
		})();
	}, []);

	return (
		<SafeAreaView style={{ ...styles.container, ...styles.SafeArea }}>
			<ContactList />
		</SafeAreaView>
	);
};

Contacts.navigationOptions = {
	header: null
};

export default Contacts;