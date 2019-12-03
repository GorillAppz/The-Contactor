import React from 'react';
import { View } from 'react-native';

import Text from '../Text';
import styles from './styles';

const ContactListSectionHeader = ({ title }) => (
	<View style={styles.container}>
		<Text style={styles.text}>{title}</Text>
	</View>
);

export default ContactListSectionHeader;