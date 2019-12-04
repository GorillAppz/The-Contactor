import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import Text from '../Text';
import ContactImageThumbnail from '../ContactImageThumbnail/index';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import PhoneNumberItem from '../PhoneNumberItem';

const ContactDetailItem = ({ contact }) => {
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
						<Button
							icon={(
								<Icon type="font-awesome" name="comment" size={17} color="white" />
							)}
							buttonStyle={styles.buttons}
						/>
						<Text style={styles.buttonText}>message</Text>
					</View>
					<View style={styles.buttonArea}>
						<Button
							icon={(
								<Icon type="font-awesome" name="phone" size={20} color="white" />
							)}
							buttonStyle={styles.buttons}
						/>
						<Text style={styles.buttonText}>phone</Text>
					</View>
				</View>
			</View>
			<View style={styles.body}>
				<FlatList
					data={contact.data.phoneNumber}
					renderItem={({ item }) => (
						<PhoneNumberItem phoneNumber={item} />
					)}
					ListEmptyComponent={(
						<Text>This contact has no numbers... add one!</Text>
					)}
				/>
			</View>
		</View>
	);
};

export default ContactDetailItem;