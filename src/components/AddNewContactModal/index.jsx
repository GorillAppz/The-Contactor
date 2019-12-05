import React from 'react';
import Modal from 'react-native-modal';
import { Button, Input } from 'react-native-elements';
import { SafeAreaView, View } from 'react-native';

import Text from '../Text';
import styles from './styles';
import userInputValidation from '../../hooks/userInputValidation';
import validateContact from '../../helpers';

const initialState = {
	name: '',
	phoneNumber: '',
	image: ''
};

const AddNewContactModal = ({ isVisible, cancelHandler }) => {
	const {
		handleSubmit,
		handleChangeText,
		values,
		errors,
		isSubmitting
	} = userInputValidation(initialState, validateContact);
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
						disabled={isSubmitting}
						onPress={() => handleSubmit()}
					/>
				</View>
				<Input
					label="Name"
					placeholder="Enter task name"
					value={values.name}
					errorStyle={{ color: 'red' }}
					errorMessage={errors.name}
					maxLength={40}
					onChangeText={(text) => handleChangeText('name', text)}
					containerStyle={styles.inputContainer}
				/>

				<Input
					label="Phone Number"
					placeholder="Enter phone number"
					value={values.phoneNumber}
					errorStyle={{ color: 'red' }}
					errorMessage={errors.phoneNumber}
					maxLength={100}
					multiline
					blurOnSubmit
					onChangeText={(text) => handleChangeText('phoneNumber', text)}
					containerStyle={styles.inputContainer}
				/>
			</SafeAreaView>
		</Modal>
	);
};

export default AddNewContactModal;