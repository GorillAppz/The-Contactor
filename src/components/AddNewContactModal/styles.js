import { StyleSheet } from 'react-native';
import { DARK_GRAY, GRAY } from '../../styles/colors';

export default StyleSheet.create({
	modal: {
		flex: 1,
		margin: 0,
		backgroundColor: 'black'
	},
	container: {
		flex: 1,
		display: 'flex',
		backgroundColor: DARK_GRAY
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
	},
	headerText: {
		display: 'flex',
		alignSelf: 'center',
		fontSize: 17,
		fontWeight: 'bold',
		color: 'white'
	},
	inputContainer: {
		borderBottomColor: GRAY,
		marginHorizontal: -8,
		paddingHorizontal: 15
	},
	inputBody: {
		borderTopWidth: 0.8,
		borderTopColor: GRAY
	},
	input: {
		color: 'white'
	}
});