import React from 'react';
import Modal from 'react-native-modal';
import { Button, Input } from 'react-native-elements';
import { SafeAreaView, View } from 'react-native';

import Text from '../Text';
import ThumbnailInput from '../ThumbnailInput';

import useUserInputValidation from '../../hooks/userInputValidation';
import { validateContact } from '../../helpers';

import styles from './styles';

const initialState = {
	name: '',
	phoneNumber: '',
	image: ''
};

const AddNewContactModal = ({ isVisible, cancelHandler, submitHandler }) => {
	const {
		handleSubmit,
		handleChangeText,
		values,
		errors,
		isSubmitting,
		resetFields
	} = useUserInputValidation(initialState, validateContact, submitHandler);

	return (
		<Modal
			isVisible={isVisible}
			style={styles.modal}
			onModalShow={() => resetFields()}
			onModalHide={() => resetFields()}
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
						onPress={handleSubmit}
					/>
				</View>
				<ThumbnailInput
					currImage={values.image}
					inputHandler={(image) => handleChangeText('image', image)}
					errorMsg={errors.image}
				/>
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