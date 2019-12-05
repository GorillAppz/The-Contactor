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
	buttonText: {
		color: BLUE,
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
		backgroundColor: BLUE
	}
});