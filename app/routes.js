import React from 'react';
import { Route, Switch } from 'react-router-dom';
// COMPONENTS
import TestComponent from './components/TestComponent';

export default (
	<Switch>
		<Route exact path="/" component={TestComponent} />
	</Switch>
);
