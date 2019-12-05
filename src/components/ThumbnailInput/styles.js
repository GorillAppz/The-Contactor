import { StyleSheet } from 'react-native';
import { GRAY, BLUE } from '../../styles/colors';

export default StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: 10
	},
	image: {
		width: 200,
		height: 200,
		marginBottom: 20,
		borderRadius: 10
	},
	label: {
		fontSize: 20,
		color: GRAY,
		fontWeight: 'bold',
		marginBottom: 0
	},
	buttonsContainer: {
		display: 'flex',
		width: '50%',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	button: {
		borderColor: 'transparent'
	},
	title: {
		fontSize: 16,
		color: BLUE
	},
	errorMsg: {
		color: 'red'
	}
});