import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
	text: {
		...Platform.select({
			ios: { fontFamily: 'Helvetica Neue' },
			android: { fontFamily: 'Roboto' }
		})
	}
});