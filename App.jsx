import React from 'react';

import AppContainer from './src/routes';

import ContactsContext from './src/contexts/contactsContext';

const App = () => {
	const [contacts, setContacts] = React.useState({ data: [], isLoading: false });
	const providerValue = React.useMemo(() => ({ contacts, setContacts }), [contacts, setContacts]);

	return (
		<ContactsContext.Provider value={providerValue}>
			<AppContainer />
		</ContactsContext.Provider>
	);
};

export default App;