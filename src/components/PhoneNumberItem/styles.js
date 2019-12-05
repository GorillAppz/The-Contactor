import { StyleSheet } from 'react-native';
import { GRAY, BLUE } from '../../styles/colors';

export default StyleSheet.create({
	phoneNumberArea: {
		paddingHorizontal: 10,
		borderBottomWidth: 0.8,
		borderBottomColor: GRAY,
		paddingVertical: 4
	},
	phoneNumber: {
		color: BLUE,
		fontSize: 15
	},
	phoneText: {
		color: 'white',
		fontSize: 15
	}
});