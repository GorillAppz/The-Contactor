import React from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import ContactImageThumbnail from '../ContactImageThumbnail/index';
import styles from './styles';
import { contactType } from '../../types';
import AddNewContactModal from '../AddNewContactModal/index';
import { removeContact } from '../../services/contactFileService';

const ContactDetailItem = ({ contact, updateContacts }) => {
	const [showAddContactModal, setShowAddContactModal] = React.useState(false);

	return (
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
				<View style={styles.editButtonContainer}>
					<Button
						onPress={() => setShowAddContactModal(true)}
						title="Edit"
						buttonStyle={{ backgroundColor: 'transparent', marginRight: 10 }}
						titleStyle={{ color: '#268bff', fontSize: 20, fontWeight: 'bold' }}
					/>
				</View>
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
			<View style={styles.phoneNumberArea}>
				<Text style={styles.phoneText}>phone</Text>
				<Text style={styles.phoneNumber}>{contact.data.phoneNumber}</Text>
			</View>
			<AddNewContactModal
				isVisible={showAddContactModal}
				cancelHandler={() => setShowAddContactModal(false)}
				updateContacts={updateContacts}
				prevContact={contact}
			/>
		</View>
	);
};

ContactDetailItem.propTypes = {
	contact: contactType
};

export default ContactDetailItem;