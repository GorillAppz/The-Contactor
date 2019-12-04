import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import ContactDetail from '../views/ContactDetail';
import Contacts from '../views/Contacts';

const MainNavigator = createStackNavigator(
	{
		Contacts: {
			screen: Contacts,
			navigationOptions: {
				headerBackTitle: 'Contacts'
			}
		},
		ContactDetail: { screen: ContactDetail }
	},
	{
		initialRouteName: 'Contacts',
		/* The header config from HomeScreen is now here */
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: 'black',
				color: 'white'
			},
			headerTintColor: '#268bff',
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