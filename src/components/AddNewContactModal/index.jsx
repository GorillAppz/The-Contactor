import React from 'react';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';
import { SafeAreaView, View } from 'react-native';

import Text from '../Text';
import styles from './styles';
import ContactInputForm from '../ContactInputForm';

const AddNewContactModal = ({ isVisible, cancelHandler }) => {
	return (
		<Modal
			isVisible={isVisible}
			style={styles.modal}
		>
			<SafeAreaView style={styles.container}>
				<View style={styles.options}>
					<Button
						type="clear"
						title="Cancel"
						onPress={cancelHandler}
					/>
					<Text style={styles.headerText}>New Contact</Text>
					<Button
						type="clear"
						title="Done"
						onPress={() => submitForm}
					/>
				</View>
				<View style={styles.body}>
					<ContactInputForm
						isVisible={isVisible}
						cancelHandler={cancelHandler}
						submitForm={() => submitForm}
					/>
				</View>
			</SafeAreaView>
		</Modal>
	);
};

export default AddNewContactModal;