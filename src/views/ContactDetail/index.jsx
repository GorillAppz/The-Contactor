import React from 'react';
import { Button } from 'react-native-elements';
import ContactDetailItem from '../../components/ContactDetailItem';

const ContactDetail = ({ navigation }) => {
	const { contact } = navigation.state.params;

	return (
		<ContactDetailItem contact={contact} />
	);
};

// ContactDetail.navigationOptions = ({ navigation }) => {
// 	const contact = navigation.state.params;
// 	console.log(contact);
// 	return ({
// 		headerRight: () => (
// 			<Button
// 				onPress={() => (console.log("dosmth"))}
// 				title="Edit"
// 				buttonStyle={{ backgroundColor: 'transparent', marginRight: 10 }}
// 				titleStyle={{ color: '#268bff', fontSize: 17 }}
// 			/>
// 		)
// 	});
// };

export default ContactDetail;