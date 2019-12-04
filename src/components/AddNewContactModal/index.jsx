import React from 'react';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';
import { SafeAreaView, View } from 'react-native';

import Text from '../Text';

import styles from './styles';
import { TouchableHighlight } from 'react-native-gesture-handler';

const AddNewContactModal = ({ isVisible, cancelHandler }) => (
	<Modal
		isVisible={isVisible}
		style={styles.modal}
	>
		<SafeAreaView style={styles.container}>
			<View style={styles.options}>
				<Button
					type="clear"
					title="Cancel"
					onPress={() => alert('i was pressed')}
				/>
				<Button
					type="clear"
					title="Done"
					onPress={() => alert("done")}
				/>
			</View>
			<Text style={styles.imageInput}>
				hello
			</Text>
			<View style={styles.infoInput}>
				<Button onPress={cancelHandler} title="hello" />
			</View>
		</SafeAreaView>
	</Modal>
);

export default AddNewContactModal;