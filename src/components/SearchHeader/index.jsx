import React from 'react';
import { View, Text, Animated, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { CRAYOLA, LIGHT_GRAY } from '../../styles/colors';
import styles from './styles';
import ContactsContext from '../../contexts/contactsContext';
import { importContactsFromPhone, clearStorage } from '../../services/contactFileService';
import { updateAndGetContactList } from '../../helpers';
import { funcType, numberType } from '../../types';


const MAX_HEADER_HEIGHT = 150;
const MIN_HEADER_HEIGHT = 90;
const OPACITY_TRIGGER = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT - 60;

const SearchHeader = ({ inputHandler, scrollY, openAddContactModalHandler }) => {
	const { setContacts } = React.useContext(ContactsContext);

	const headerHeight = scrollY.interpolate({
		inputRange: [0, MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT],
		outputRange: [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
		extrapolate: 'clamp'
	});

	const smallHeaderOpacity = scrollY.interpolate({
		inputRange: [OPACITY_TRIGGER, MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT],
		outputRange: [0, 1],
		extrapolate: 'clamp'
	});

	const importContactsHandler = async () => {
		const importAndRefresh = async () => {
			await importContactsFromPhone();
			setContacts({ isLoading: true, data: [] });
			const refreshedContacts = await updateAndGetContactList();
			setContacts({ isLoading: false, data: refreshedContacts });
		};

		Alert.alert(
			'Importing all contacts from phone',
			'Are you sure you would like to import ALL contacts from your phone?',
			[
				{ text: 'Yes I am!', onPress: async () => importAndRefresh() },
				{ text: 'No! Cancel' }
			]
		);
	};

	const clearAllContactsHandler = async () => {
		const clearAllAndRefresh = async () => {
			await clearStorage();
			setContacts({ isLoading: true, data: [] });
			const refreshedContacts = await updateAndGetContactList();
			setContacts({ isLoading: false, data: refreshedContacts });
		};

		Alert.alert(
			'Clearing all contacts',
			'Are you sure you would like to clear ALL contacts (only in app, not phone)',
			[
				{ text: 'Yes I am!', onPress: async () => clearAllAndRefresh() },
				{ text: 'No! Cancel' }
			]
		);
	};

	return (
		<Animated.View style={{ ...styles.headerContainer, height: headerHeight }}>
			<View style={styles.smallHeaderContainer}>
				<View style={styles.smallHeaderLeftButtons}>
					<Button
						icon={{
							name: 'book',
							type: 'font-awesome',
							color: CRAYOLA,
							size: 30
						}}
						buttonStyle={styles.button}
						onPress={importContactsHandler}
					/>
					<Button
						icon={{
							name: 'eraser',
							type: 'font-awesome',
							color: CRAYOLA,
							size: 30
						}}
						buttonStyle={styles.button}
						onPress={clearAllContactsHandler}
					/>

				</View>
				<Animated.Text style={{ ...styles.smallHeader, opacity: smallHeaderOpacity }}>
					Contacts
				</Animated.Text>
				<Button
					icon={{
						name: 'add',
						color: CRAYOLA,
						size: 34
					}}
					buttonStyle={styles.button}
					onPress={openAddContactModalHandler}
				/>
			</View>
			<Text style={styles.bigHeader}>Contacts</Text>
			<Input
				placeholder="Search"
				placeholderTextColor={LIGHT_GRAY}
				leftIcon={{ name: 'search', color: LIGHT_GRAY }}
				inputStyle={styles.input}
				inputContainerStyle={styles.inputContainer}
				containerStyle={styles.container}
				onChangeText={(input) => inputHandler(input)}
			/>
		</Animated.View>
	);
};

SearchHeader.propTypes = {
	inputHandler: funcType.isRequired,
	scrollY: numberType.isRequired,
	openAddContactModalHandler: funcType.isRequired
};

export default SearchHeader;