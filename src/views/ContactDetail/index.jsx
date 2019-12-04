import React from 'react';
import ContactDetailItem from '../../components/ContactDetailItem';

const ContactDetail = ({ navigation }) => {
	const { contact } = navigation.state.params;
	return (
		<ContactDetailItem contact={contact} />
	);
};

export default ContactDetail;