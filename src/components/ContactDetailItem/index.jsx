import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import Text from '../Text';
import ContactImageThumbnail from '../ContactImageThumbnail/index';
import styles from './styles';

const ContactDetailItem = ({ contact }) => {
	console.log(contact);
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<ContactImageThumbnail
					uri={contact.data.image && contact.data.image}
					name={contact.data.name}
				/>
				<Text style={styles.contactName}>{contact.data.name}</Text>
				<View style={styles.buttonsArea}>
					<View style={styles.buttonArea}>
						<Button icon={(<Icon name="call" size={15} color="white" />)} buttonStyle={styles.buttons} />
						<Text style={styles.buttonText}>phone</Text>
					</View>
					<View style={styles.buttonArea}>
						<Button icon={(<Icon name="message" size={15} color="white" />)} buttonStyle={styles.buttons} />
						<Text style={styles.buttonText}>message</Text>
					</View>
				</View>
			</View>
			<View style={styles.body}>
				<View style={styles.phoneNumberArea}>
					<Text style={styles.phoneText}>phone</Text>
					<Text style={styles.phoneNumber}>{contact.data.phoneNumber}</Text>
				</View>
			</View>
		</View>
	);
};

export default ContactDetailItem;