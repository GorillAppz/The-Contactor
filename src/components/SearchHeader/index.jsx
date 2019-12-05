import React from 'react';
import { View, Text, Animated, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { CRAYOLA } from '../../styles/colors';
import styles from './styles';

const MAX_HEADER_HEIGHT = 150;
const MIN_HEADER_HEIGHT = 90;

const SearchHeader = ({ inputHandler, scrollY, openAddContactModalHandler }) => {

	const headerHeight = scrollY.interpolate({
		inputRange: [0, MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT],
		outputRange: [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
		extrapolate: 'clamp'
	});

	const smallHeaderOpacity = scrollY.interpolate({
		inputRange: [MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT - 10, MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT],
		outputRange: [0, 1],
		extrapolate: 'clamp'
	});

	const importContactsHandler = () => {
		Alert.alert(
			'Importing all contacts from phone',
			'Are you sure you would like to import ALL contacts from your phone?',
			[
				{ text: 'Yes I am!', onPress: () => console.log('accepted') },
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
					onPress={importContactsHandler}
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
				placeholderTextColor="#7a7a7a"
				leftIcon={{ name: 'search', color: '#7a7a7a' }}
				inputStyle={styles.input}
				inputContainerStyle={styles.inputContainer}
				containerStyle={styles.container}
				onChangeText={(input) => inputHandler(input)}
			/>
		</Animated.View>
	);
};


export default SearchHeader;