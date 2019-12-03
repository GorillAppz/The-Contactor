import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		height: 50,
		width: 50,
		borderRadius: (50 / 2),
		overflow: 'hidden',
		margin: 5,
		marginRight: 15
	},
	withoutImageTextContainer: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	},
	withoutImageText: {
		fontSize: 20
	}
});