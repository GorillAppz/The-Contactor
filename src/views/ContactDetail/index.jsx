import React from 'react';
import ContactDetailItem from '../../components/ContactDetailItem';
import contactsContext from '../../contexts/contactsContext';

const ContactDetail = ({ navigation }) => {
	const { contactId } = navigation.state.params;


	return (
		<ContactDetailItem contactId={contactId} />
	);
};

export default ContactDetail;