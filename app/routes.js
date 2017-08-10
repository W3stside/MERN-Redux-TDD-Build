/* eslint react/no-multi-comp: 0 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// COMPONENTS
import TestComponent from './components/TestComponent';

const About = () =>
<div>
	<h1> About Us </h1>
</div>;

const Contact = () =>
<div>
	<h1> Contact Us </h1>
</div>;

export default (
	<Switch>
		<Route exact path="/" component={TestComponent} />
		<Route path="/about" component={About} />
		<Route path="/contact" component={Contact} />
	</Switch>
);
