import React from 'react';
import { withNavigation } from 'react-navigation';

import { TouchableHighlight, View } from 'react-native';

import Text from '../Text';
import ContactImageThumbnail from '../ContactImageThumbnail';

import styles from './styles';

const ContactListItem = ({ contact, navigation: { navigate } }) => {
	return (
		<TouchableHighlight
			onPress={() => navigate('ContactDetail', { contact })}
			style={styles.touchableContainer}
		>
			<View style={styles.container}>
				<ContactImageThumbnail
					uri={contact.data.image && contact.data.image}
					name={contact.data.name}
				/>
				<Text style={styles.text}>
					{contact.data.name}
				</Text>
			</View>
		</TouchableHighlight>
	);
};

export default withNavigation(ContactListItem);