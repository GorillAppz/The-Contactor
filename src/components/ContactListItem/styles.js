import { StyleSheet } from 'react-native';
import { GRAY } from '../../styles/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: 'lightgray',
		borderBottomWidth: 1,
		padding: 5
	},
	text: {
		fontSize: 17
	}
});