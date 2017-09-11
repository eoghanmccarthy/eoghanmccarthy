import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SlideIndexReducer from './reducers/slideindex';

// Import components
import Lightbox from './containers/lightbox';

const store = createStore(
	SlideIndexReducer,
	window.devToolsExtension && devToolsExtension()
);

// Render the UI
ReactDOM.render(
	<Provider store={store}>
		<Lightbox />
	</Provider>,
	document.getElementById('lightbox')
);
