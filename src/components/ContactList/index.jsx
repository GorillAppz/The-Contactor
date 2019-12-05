import React from 'react';

import { SectionList, View, Animated } from 'react-native';

import ContactListItem from '../ContactListItem';
import SearchHeader from '../SearchHeader';
import ContactListSectionHeader from '../ContactListSectionHeader';
<<<<<<< HEAD
import ContactInputForm from '../ContactInputForm';
import EmptyContacts from '../EmptyContacts';
=======
>>>>>>> 98349c118aac82fb9e7dd503aa101f967f8d508d

import { groupContacts } from '../../helpers';
import styles from './styles';
import AddNewContactModal from '../AddNewContactModal';

const ContactList = ({ contacts, updateContacts }) => {

	const [filteredContacts, setFilteredContacts] = React.useState([]);
	const [scrollY] = React.useState(new Animated.Value(0));
	const [showAddContactModal, setShowAddContactModal] = React.useState(false);

	React.useEffect(() => {
		if (contacts.length) {
			setFilteredContacts(groupContacts(contacts));
		}
	}, [contacts]);

	const searchInputHandler = (input) => {
		const contactsFilteredBySearch = contacts.filter(({ data }) => {
			const lowerCaseName = data.name.toLowerCase();
			const lowerCaseText = input.toLowerCase();
			return lowerCaseName.includes(lowerCaseText);
		});
		setFilteredContacts(groupContacts(contactsFilteredBySearch));
	};

	const addSuccessHandler = () => {
		updateContacts();
		setShowAddContactModal(false);
	};

	return (
		<View style={styles.container}>
			<SearchHeader
				inputHandler={(input) => searchInputHandler(input)}
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
				ListEmptyComponent={<EmptyContacts />}
			/>
			<ContactInputForm
				isVisible={showAddContactModal}
				cancelHandler={() => setShowAddContactModal(false)}
				updateContacts={addSuccessHandler}
			/>
<<<<<<< HEAD
=======
			<AddNewContactModal isVisible={showAddContactModal} cancelHandler={() => setShowAddContactModal(false)} />
>>>>>>> 98349c118aac82fb9e7dd503aa101f967f8d508d
		</View>
	);
};

export default ContactList;