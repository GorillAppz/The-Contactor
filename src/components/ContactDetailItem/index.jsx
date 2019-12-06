import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

import Text from '../Text';
import ContactImageThumbnail from '../ContactImageThumbnail/index';
import styles from './styles';
import PhoneNumberItem from '../PhoneNumberItem';
import { contactType } from '../../types';

const ContactDetailItem = ({ contact }) => (
	<View style={styles.container}>
		<View style={styles.header}>
			<ContactImageThumbnail
				uri={contact.data.image}
				name={contact.data.name}
				height={100}
				width={100}
				fontSize={38}
			/>
			<Text style={styles.contactName}>{contact.data.name}</Text>
			<View style={styles.buttonsArea}>
				<View style={styles.buttonArea}>
					<Button
						icon={(
							<Icon type="font-awesome" name="comment" size={25} color="white" />
						)}
						buttonStyle={styles.buttons}
					/>
					<Text style={styles.messageButtonText}>message</Text>
				</View>
				<View style={styles.buttonArea}>
					<Button
						icon={(
							<Icon type="font-awesome" name="phone" size={30} color="white" />
						)}
						buttonStyle={styles.buttons}
					/>
					<Text style={styles.phoneButtonText}>phone</Text>
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
				keyExtractor={({ phoneNumber, index }) => (`${index}-${phoneNumber}-${index}`)}
			/>
		</View>
	</View>
);

// ContactDetailItem.propTypes = {
// 	contact: contactType
// };

export default ContactDetailItem;