import 'babel-polyfill';
import './styles/main.styl';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Routes } from 'root/routes';
import { useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createHistory } from 'history';
import configureStore from 'root/store/configureStore';
import DevTools from 'root/components/devtools';

const store = configureStore();
const appHistory = useRouterHistory(createHistory)({
	basename:
	'http://localhost:4000/'
});

export const history = syncHistoryWithStore(appHistory, store);

render(
	<Provider store={store}>
		<div>
			<Routes store={store} history={history} />
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('app')
);
