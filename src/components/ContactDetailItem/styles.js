import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		marginVertical: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 0.8,
		borderBottomColor: 'lightgray'
	},
	buttonsArea: {
		flexDirection: 'row'
	},
	buttonArea: {
		paddingHorizontal: 35,
		paddingVertical: 8
	},
	buttonText: {
		color: 'blue',
		fontSize: 11,
		marginTop: 4
	},
	contactName: {
		fontSize: 25,
		fontWeight: 'bold'
	},
	buttons: {
		height: 30,
		width: 30,
		borderRadius: 50,
		backgroundColor: 'blue'
	},
	phoneNumberArea: {
		paddingHorizontal: 10,
		borderBottomWidth: 0.8,
		borderBottomColor: 'lightgray',
		paddingBottom: 8
	},
	phoneNumber: {
		color: 'blue'
	}
});