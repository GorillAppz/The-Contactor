import React from 'react';
import { View } from 'react-native';

import Text from '../../components/Text';

const ContactDetail = () => {
	return (
		<View>
			<Text>
				Contact Detail
			</Text>
		</View>
	);
};

ContactDetail.defaultNavigationOptions = {
	headerBackTitle: null
};

export default ContactDetail;