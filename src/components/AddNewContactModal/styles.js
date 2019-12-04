import { StyleSheet } from 'react-native';
import { CRAYOLA } from '../../styles/colors';

export default StyleSheet.create({
	modal: {
		flex: 1,
		backgroundColor: 'white',
		margin: 0
	},
	container: {
		flex: 1,
		display: 'flex'
	},
	imageInput: {
		flexGrow: 1
	},
	infoInput: {
		flexGrow: 2
	},
	options: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: '4%'
	}
});