import React from 'react';
import { View } from 'react-native';

import Text from '../Text';
import styles from './styles';
import { stringType } from '../../types/index';

const ContactListSectionHeader = ({ title }) => (
	<View style={styles.container}>
		<Text style={styles.text}>{title}</Text>
	</View>
);

ContactListSectionHeader.propTypes = {
	title: stringType.isRequired
};

export default ContactListSectionHeader;