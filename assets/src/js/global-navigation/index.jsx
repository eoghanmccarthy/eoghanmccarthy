import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

// Import components
import App from './components/App';

// Render the UI
render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('globalNavigation')
);
