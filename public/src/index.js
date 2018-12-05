import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/app';
import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore'


ReactDOM.render((
	<Provider store={configureStore}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
), document.getElementById('app'));
