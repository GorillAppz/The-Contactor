import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Text from '../Text';

import styles from './styles';

const EmptyContacts = () => (
	<View style={styles.container}>
		<Icon
			name="sad-tear"
			color="darkgray"
			size={300}
		/>
		<Text style={styles.text}>
			No contacts found!
		</Text>
	</View>
);

export default EmptyContacts;