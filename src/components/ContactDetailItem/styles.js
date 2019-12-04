import { StyleSheet } from 'react-native';

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
		borderBottomColor: '#383838'
	},
	buttonsArea: {
		flexDirection: 'row'
	},
	buttonArea: {
		paddingHorizontal: 35,
		paddingVertical: 8
	},
	buttonText: {
		color: '#268bff',
		fontSize: 11,
		marginTop: 4
	},
	contactName: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'white'
	},
	buttons: {
		height: 33,
		width: 33,
		borderRadius: 50,
		backgroundColor: '#268bff'
	}
});