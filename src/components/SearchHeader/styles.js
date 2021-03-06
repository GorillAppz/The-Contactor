import { StyleSheet } from 'react-native';
import { DARK_GRAY } from '../../styles/colors';

export default StyleSheet.create({
	headerContainer: {
		padding: 15,
		display: 'flex',
		justifyContent: 'flex-end',
		overflow: 'hidden'
	},
	input: {
		height: 50,
		width: '80%',
		color: 'white'
	},
	inputContainer: {
		borderBottomWidth: 0,
		height: 40
	},
	container: {
		borderBottomWidth: 0,
		backgroundColor: DARK_GRAY,
		width: '80%',
		alignSelf: 'center',
		borderRadius: 10
	},
	smallHeader: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		color: 'white'
	},
	smallHeaderContainer: {
		position: 'absolute',
		top: 0,
		backgroundColor: 'black',
		alignSelf: 'center',
		zIndex: 999,
		width: '100%',
		height: 35,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	smallHeaderLeftButtons: {
		flexDirection: 'row'
	},
	bigHeader: {
		fontWeight: '800',
		fontSize: 40,
		zIndex: -1,
		marginBottom: 10,
		color: 'white'
	},
	button: {
		backgroundColor: 'transparent',
		padding: 0
	}
});