import React from 'react';

import { SectionList, View, Animated, ActivityIndicator } from 'react-native';

import ContactListItem from '../ContactListItem';
import SearchHeader from '../SearchHeader';
import ContactListSectionHeader from '../ContactListSectionHeader';

import { importContactsFromPhone } from '../../services/contactFileService';
import { groupContacts } from '../../helpers';
import styles from './styles';
import AddNewContactModal from '../AddNewContactModal';
import EmptyContacts from '../EmptyContacts';

const ContactList = ({ contacts, updateContacts, isLoading }) => {

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

	const importContactsHandler = async () => {
		await importContactsFromPhone();
		await updateContacts();
	};

	const saveContactHandler = (contact) => {
		updateContacts();
		setShowAddContactModal(false);
	};

	const renderSectionHeader = ({ section }) => <ContactListSectionHeader title={section.title} />;
	const renderItem = ({ item }) => (<ContactListItem contact={item} />);
	const keyExtractor = (contact) => contact.id;

	return (
		<View style={styles.container}>
			<SearchHeader
				inputHandler={(input) => searchInputHandler(input)}
				scrollY={scrollY}
				openAddContactModalHandler={() => setShowAddContactModal(true)}
				importContactsHandler={importContactsHandler}
			/>
			{
				isLoading
					? (
						<View style={styles.loadingContainer}>
							<ActivityIndicator size="large" />
						</View>
					)
					: (
						<SectionList
							sections={filteredContacts}
							stickySectionHeadersEnabled
							renderSectionHeader={renderSectionHeader}
							renderItem={renderItem}
							keyExtractor={keyExtractor}
							onScroll={Animated.event(
								[{ nativeEvent: { contentOffset: { y: scrollY } } }]
							)}
							scrollEventThrottle={16}
							disableVirtualization
							ListEmptyComponent={<EmptyContacts />}
						/>
					)
			}

			<AddNewContactModal
				isVisible={showAddContactModal}
				cancelHandler={() => setShowAddContactModal(false)}
				submitHandler={saveContactHandler}
			/>
		</View>
	);
};

export default ContactList;