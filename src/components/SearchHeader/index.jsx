import React from 'react';
import { View, Text, Animated } from "react-native";
import { Input, Icon } from 'react-native-elements';
import styles from './styles';

const MAX_HEADER_HEIGHT = 150;
const MIN_HEADER_HEIGHT = 90;

const SearchHeader = ({ inputHandler, scrollY }) => {

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

	return (
		<Animated.View style={{ ...styles.headerContainer, height: headerHeight }}>
			<View style={styles.smallHeaderContainer}>
				<Icon name="adjust" type="font-awesome" />
				<Animated.Text style={{ ...styles.smallHeader, opacity: smallHeaderOpacity }}>Contacts</Animated.Text>
				<Icon name="add" />
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