import { Platform, StatusBar } from 'react-native';

export default {
	SafeArea: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		overflow: 'hidden'
	}
};