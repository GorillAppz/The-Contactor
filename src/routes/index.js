import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

const MainNavigator = createStackNavigator(
	{
		// Main: { screen: Main },
		// Boards: { screen: Boards },
		// Lists: { screen: Lists }
	},
	{
		initialRouteName: 'Main',
		/* The header config from HomeScreen is now here */
		defaultNavigationOptions: {
			// headerStyle: {
			// backgroundColor: PURPLE
			// },
			// headerTintColor: LIGHT,
			headerTitleStyle: {
				fontWeight: 'bold',
				alignSelf: 'center',
				fontFamily: 'Roboto',
				...Platform.select({
					ios: { fontFamily: 'Helvetica Neue' },
					android: { fontFamily: 'Roboto' }
				})
			}
		}
	}
);

export default createAppContainer(MainNavigator);