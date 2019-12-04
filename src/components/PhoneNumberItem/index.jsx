import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const PhoneNumberItem = ({ phoneNumber }) => {
	console.log(phoneNumber);
	const { phone, label } = phoneNumber;
	return (
		<View style={styles.phoneNumberArea}>
			<Text style={styles.phoneText}>{label}</Text>
			<Text style={styles.phoneNumber}>{phone}</Text>
		</View>
	);
};

export default PhoneNumberItem;