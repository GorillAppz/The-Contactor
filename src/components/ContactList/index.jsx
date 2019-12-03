import React from 'react';

import { SectionList, View, Animated } from 'react-native';

import ContactListItem from '../ContactListItem';
import SearchHeader from '../SearchHeader';
import ContactListSectionHeader from '../ContactListSectionHeader';
import AddNewContactModal from '../AddNewContactModal';

import { groupContacts } from '../helpers';
import styles from './styles';

const ContactList = ({ contacts }) => {

	const [filteredContacts, setFilteredContacts] = React.useState([]);
	const [scrollY] = React.useState(new Animated.Value(0));
	const [showAddContactModal, setShowAddContactModal] = React.useState(false);

	React.useEffect(() => {
		if (contacts.length) {
			setFilteredContacts(groupContacts(contacts));
		}
	}, [contacts]);

	const inputHandler = (input) => {
		const contactsFilteredBySearch = contacts.filter(({ data }) => {
			const lowerCaseName = data.name.toLowerCase();
			const lowerCaseText = input.toLowerCase();
			return lowerCaseName.includes(lowerCaseText);
		});
		setFilteredContacts(groupContacts(contactsFilteredBySearch));
	};

	return (
		<View style={styles.container}>
			<SearchHeader
				inputHandler={(input) => inputHandler(input)}
				scrollY={scrollY}
				openAddContactModalHandler={() => setShowAddContactModal(true)}
			/>
			<SectionList
				sections={filteredContacts}
				stickySectionHeadersEnabled
				renderSectionHeader={({ section }) => <ContactListSectionHeader title={section.title} />}
				renderItem={({ item }) => (
					<ContactListItem contact={item} />
				)}
				keyExtractor={((contact) => contact.id)}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollY } } }]
				)}
				scrollEventThrottle={16}
				disableVirtualization
			/>
			<AddNewContactModal isVisible={showAddContactModal} cancelHandler={() => setShowAddContactModal(false)} />
		</View>
	);
};

export default ContactList;