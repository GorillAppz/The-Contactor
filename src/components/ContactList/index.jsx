import React from 'react';

import { SectionList, View, Animated, ActivityIndicator } from 'react-native';

import ContactListItem from '../ContactListItem';
import SearchHeader from '../SearchHeader';
import ContactListSectionHeader from '../ContactListSectionHeader';

import { groupContacts } from '../../helpers';
import styles from './styles';
import AddNewContactModal from '../AddNewContactModal';
import EmptyContacts from '../EmptyContacts';
import ContactsContext from '../../contexts/contactsContext';

const ContactList = () => {
	const { contacts } = React.useContext(ContactsContext);
	const [filteredContacts, setFilteredContacts] = React.useState([]);
	const [scrollY] = React.useState(new Animated.Value(0));
	const [showAddContactModal, setShowAddContactModal] = React.useState(false);

	React.useEffect(() => {
		if (contacts.data.length) {
			setFilteredContacts(groupContacts(contacts.data));
		} else {
			setFilteredContacts([]);
		}
	}, [contacts]);

	const searchInputHandler = (input) => {
		const contactsFilteredBySearch = contacts.data.filter(({ data }) => {
			const lowerCaseName = data.name.toLowerCase();
			const lowerCaseText = input.toLowerCase();
			return lowerCaseName.includes(lowerCaseText);
		});
		setFilteredContacts(groupContacts(contactsFilteredBySearch));
	};

	return (
		<View style={styles.container}>
			<SearchHeader
				inputHandler={(input) => searchInputHandler(input)}
				scrollY={scrollY}
				openAddContactModalHandler={() => setShowAddContactModal(true)}
			/>
			{
				contacts.isLoading
					? (
						<View style={styles.loadingContainer}>
							<ActivityIndicator size="large" />
						</View>
					)
					: (
						<SectionList
							sections={filteredContacts}
							stickySectionHeadersEnabled
							renderSectionHeader={({ section }) => <ContactListSectionHeader title={section.title} />}
							renderItem={({ item }) => (<ContactListItem contact={item} />)}
							keyExtractor={(contact) => contact.id}
							onScroll={Animated.event(
								[{ nativeEvent: { contentOffset: { y: scrollY } } }]
							)}
							scrollEventThrottle={16}
							ListEmptyComponent={<EmptyContacts />}
							initialNumToRender={0}
						/>
					)
			}

			<AddNewContactModal
				isVisible={showAddContactModal}
				closeModalHandler={() => setShowAddContactModal(false)}
			/>
		</View>
	);
};

export default ContactList;