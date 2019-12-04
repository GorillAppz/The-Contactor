import React from 'react';
import Modal from 'react-native-modal';
import { View, SafeAreaView } from 'react-native';
import { Input, Button } from 'react-native-elements';

import styles from './styles';
import Text from '../Text';

const initState = {
	fields: {
		name: '',
		phoneNumber: '',
		image: ''
	},
	errors: {
		name: '',
		phoneNumber: '',
		image: ''
	}
};

class ContactInputForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...initState };
	}

	submitForm() {
		console.log('imhere');
		const { submitHandler } = this.props;
		const { fields } = this.state;
		if (!this.validateForm()) { return; }
		submitHandler(fields);
	}

	validateForm() {
		const errors = {};
		const { fields } = this.state;

		if (fields.name.length < 3) {
			errors.name = 'Name must be atleast 3 characters!';
		}

		if (fields.phoneNumber.length <= 0) {
			errors.phoneNumber = 'Please enter a description';
		}

		if (fields.image) {
			errors.image = 'Please insert your image';
		}

		this.setState({ errors: { ...initState.errors, ...errors } });

		return !(Object.keys(errors).length > 0);
	}

	inputHandler(name, value) {
		const { fields } = this.state;
		this.setState({ fields: { ...fields, [name]: value } });
	}

	render() {
		const { fields, errors } = this.state;
		const { isVisible, cancelHandler } = this.props;
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
							onPress={() => true}
						/>
					</View>
					<Input
						label="Name"
						placeholder="Enter task name"
						value={fields.name}
						errorStyle={{ color: 'red' }}
						errorMessage={errors.name}
						maxLength={40}
						onChangeText={(text) => this.inputHandler('name', text)}
						containerStyle={styles.inputContainer}
					/>

					<Input
						label="Phone Number"
						placeholder="Enter phone number"
						value={fields.phoneNumber}
						errorStyle={{ color: 'red' }}
						errorMessage={errors.phoneNumber}
						maxLength={100}
						multiline
						blurOnSubmit
						onChangeText={(text) => this.inputHandler('phoneNumber', text)}
						containerStyle={styles.inputContainer}
					/>
				</SafeAreaView>
			</Modal>
		);
	}
}

export default ContactInputForm;