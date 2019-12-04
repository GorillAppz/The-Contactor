import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	headerContainer: {
		padding: 15,
		display: 'flex',
		justifyContent: 'flex-end',
		overflow: 'hidden'
	},
	input: {
		height: 50,
		width: '80%'
	},
	inputContainer: {
		borderBottomWidth: 0,
		height: 40
	},
	container: {
		borderBottomWidth: 0,
		backgroundColor: 'rgba(200,200,200,0.5)',
		width: '80%',
		alignSelf: 'center',
		borderRadius: 10
	},
	smallHeader: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	smallHeaderContainer: {
		position: 'absolute',
		top: 0,
		backgroundColor: 'white',
		alignSelf: 'center',
		zIndex: 999,
		width: '100%',
		height: 35,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	bigHeader: {
		fontWeight: '800',
		fontSize: 40,
		zIndex: -1,
		marginBottom: 10
	},
	button: {
		padding: 0,
		backgroundColor: 'white'
	}
});