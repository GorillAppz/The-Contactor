import React from 'react';
import { View, Text, Animated, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { CRAYOLA, LIGHT_GRAY } from '../../styles/colors';
import styles from './styles';
import { inputHandlerType, numberType, openAddContactModalHandlerType, importContactsHandlerType } from '../../types';

const MAX_HEADER_HEIGHT = 150;
const MIN_HEADER_HEIGHT = 90;
const OPACITY_TRIGGER = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT - 60;

const SearchHeader = ({ inputHandler, scrollY, openAddContactModalHandler, importContactsHandler }) => {
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

	const _importContactsHandler = () => {
		Alert.alert(
			'Importing all contacts from phone',
			'Are you sure you would like to import ALL contacts from your phone?',
			[
				{ text: 'Yes I am!', onPress: async () => importContactsHandler() },
				{ text: 'No! Cancel', onPress: () => console.log('canceled') }
			]
		);
	};

	return (
		<Animated.View style={{ ...styles.headerContainer, height: headerHeight }}>
			<View style={styles.smallHeaderContainer}>
				<Button
					icon={{
						name: 'book',
						type: 'font-awesome',
						color: CRAYOLA,
						size: 30
					}}
					buttonStyle={styles.button}
					onPress={_importContactsHandler}
				/>
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
	inputHandler: inputHandlerType.isRequired,
	scrollY: numberType.isRequired,
	openAddContactModalHandler: openAddContactModalHandlerType.isRequired,
	importContactsHandler: importContactsHandlerType.isRequired
};

export default SearchHeader;