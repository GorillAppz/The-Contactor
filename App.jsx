import React from 'react';

import AppContainer from './src/routes';
import { contactsInit } from './src/services/contactFileService';

const App = () => {
	React.useEffect(() => {
		(async () => {
			await contactsInit();
		})();
	}, []);

	return (
		<AppContainer />
	);
};


export default App;