import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	modal: {
		flex: 1,
		backgroundColor: '#292727',
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
	},
	headerText: {
		display: 'flex',
		alignSelf: 'center',
		fontSize: 17,
		fontWeight: 'bold',
		color: 'white'
	}
});