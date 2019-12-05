import { StyleSheet } from 'react-native';
import { BLUE, GRAY } from '../../styles/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black'
	},
	header: {
		paddingVertical: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 0.8,
		borderBottomColor: GRAY
	},
	buttonsArea: {
		flexDirection: 'row'
	},
	buttonArea: {
		paddingHorizontal: 35,
		paddingVertical: 8
	},
	messageButtonText: {
		color: BLUE,
		fontSize: 15,
		marginTop: 4
	},
	phoneButtonText: {
		color: BLUE,
		fontSize: 15,
		marginTop: 4,
		paddingHorizontal: 5
	},
	contactName: {
		fontSize: 32,
		fontWeight: 'bold',
		color: 'white'
	},
	buttons: {
		height: 50,
		width: 50,
		borderRadius: 50,
		backgroundColor: BLUE
	},
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
		fontSize: 15,
		paddingBottom: 4
	}
});