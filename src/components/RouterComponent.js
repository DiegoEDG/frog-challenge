import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const RouterComponent = () => {
	return (
		<Router>
			<>
				<Switch>
					<Route path="/about" />
					<Route path="/about" />
					<Route path="/about" />
				</Switch>
			</>
		</Router>
	);
};
