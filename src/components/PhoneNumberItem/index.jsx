import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { phoneNumberType } from '../../types';

const PhoneNumberItem = ({ phoneNumber }) => {
	const { phone, label } = phoneNumber;
	return (
		<View style={styles.phoneNumberArea}>
			<Text style={styles.phoneText}>{label.length > 0 ? label : 'phone'}</Text>
			<Text style={styles.phoneNumber}>{phone}</Text>
		</View>
	);
};

PhoneNumberItem.propTypes = {
	phoneNumber: phoneNumberType.isRequired
};

export default PhoneNumberItem;