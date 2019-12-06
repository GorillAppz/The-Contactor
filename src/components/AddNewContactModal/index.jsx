import React from 'react';
import Modal from 'react-native-modal';
import { Button, Input } from 'react-native-elements';
import { SafeAreaView, View } from 'react-native';

import Text from '../Text';
import ThumbnailInput from '../ThumbnailInput';

import useForm from '../../hooks/useForm';
import { validateContact, updateAndGetContactList } from '../../helpers';

import styles from './styles';
import { LIGHT_GRAY } from '../../styles/colors';

import ContactsContext from '../../contexts/contactsContext';
import { isVisibleType, cancelHandlerType, UpdateContactsType } from '../../types';
import { createContact, updateContact } from '../../services/contactFileService';

const initialState = {
	name: '',
	phoneNumber: '',
	image: ''
};

const AddNewContactModal = ({ isVisible, closeModalHandler, prevContact }) => {
	const { setContacts } = React.useContext(ContactsContext);

	const state = prevContact ? prevContact.data : initialState;

	const submitHandler = async (values) => {
		if (prevContact) {
			const contact = {
				id: prevContact.id,
				data: {
					name: values.name,
					phoneNumber: values.phoneNumber,
					image: values.image
				}
			};
			updateContact(contact);
			const refreshedContacts = await updateAndGetContactList();
			setContacts({ data: refreshedContacts, isLoading: false });
		} else {
			const contact = {
				name: values.name,
				phoneNumber: values.phoneNumber,
				image: values.image
			};
			createContact(contact);
			const refreshedContacts = await updateAndGetContactList();
			setContacts({ data: refreshedContacts, isLoading: false });
		}
		closeModalHandler();
	};

	const { handleSubmit, handleChangeText, values, errors, isSubmitting, resetFields } = useForm(
		state,
		validateContact,
		submitHandler
	);

	return (
		<Modal
			isVisible={isVisible}
			style={styles.modal}
			onModalShow={() => resetFields()}
			onModalHide={() => resetFields()}
			animationIn={prevContact ? 'fadeIn' : 'slideInUp'}
			animationOut={prevContact ? 'fadeOut' : 'slideOutDown'}
		>
			<SafeAreaView style={styles.container}>
				<View style={styles.options}>
					<Button
						type="clear"
						title="Cancel"
						onPress={closeModalHandler}
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
					contactName={values.name}
				/>
				<View style={styles.inputBody}>
					<Input
						inputStyle={styles.input}
						placeholder="Name"
						placeholderTextColor={LIGHT_GRAY}
						value={values.name}
						errorStyle={{ color: 'red' }}
						errorMessage={errors.name}
						maxLength={40}
						onChangeText={(text) => handleChangeText('name', text)}
						inputContainerStyle={styles.inputContainer}
					/>

					<Input
						inputStyle={styles.input}
						placeholder="Phone number"
						placeholderTextColor={LIGHT_GRAY}
						value={values.phoneNumber}
						errorStyle={{ color: 'red' }}
						errorMessage={errors.phoneNumber}
						maxLength={100}
						multiline
						blurOnSubmit
						onChangeText={(text) => handleChangeText('phoneNumber', text.replace(/[^0-9]/g, ''))}
						inputContainerStyle={styles.inputContainer}
						keyboardType="numeric"
					/>
				</View>
			</SafeAreaView>
		</Modal>
	);
};

// AddNewContactModal.propTypes = {
// 	isVisible: isVisibleType.isRequired
// };

export default AddNewContactModal;