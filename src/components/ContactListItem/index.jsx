import React from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableHighlight, View } from 'react-native';

import Text from '../Text';
import ContactImageThumbnail from '../ContactImageThumbnail';
import styles from './styles';
import { contactType } from '../../types';

const ContactListItem = ({ contact, navigation: { navigate } }) => (
	<TouchableHighlight
		onPress={() => navigate('ContactDetail', { contactId: contact.id })}
		style={styles.touchableContainer}
	>
		<View style={styles.container}>
			<ContactImageThumbnail
				uri={contact.data.image && contact.data.image}
				name={contact.data.name}
				width={44}
				height={44}
				fontSize={16}
			/>
			<Text style={styles.text}>
				{contact.data.name}
			</Text>
		</View>
	</TouchableHighlight>
);

ContactListItem.propTypes = {
	contact: contactType
};

export default React.memo(withNavigation(ContactListItem));