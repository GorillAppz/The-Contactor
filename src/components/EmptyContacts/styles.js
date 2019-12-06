import { StyleSheet } from 'react-native';
import { GRAY } from '../../styles/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		padding: 20
	},
	text: {
		color: GRAY,
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold'
	}
});