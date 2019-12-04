import { StyleSheet } from 'react-native';
import { GRAY } from '../../styles/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		backgroundColor: 'black',
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: 'gray',
		borderBottomWidth: 0.6,
		padding: 5
	},
	text: {
		fontSize: 17,
		color: 'white'
	}
});