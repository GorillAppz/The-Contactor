import React from 'react';
import ContactDetailItem from '../../components/ContactDetailItem';

const ContactDetail = ({ navigation }) => {
	const { contactId } = navigation.state.params;

	return (
		<ContactDetailItem contactId={contactId} />
	);
};

export default ContactDetail;