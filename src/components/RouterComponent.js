import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { MainScreen } from './MainScreen';
import { ProfileScreen } from './ProfileScreen';
import { SearchScreen } from './SearchScreen';

export const RouterComponent = () => {
	return (
		<Router>
			<>
				<Switch>
					<Route exact path="/" component={MainScreen} />
					<Route exact path="/home" component={HomeScreen} />
					<Route exact path="/search" component={SearchScreen} />
					<Route exact path="/profile" component={ProfileScreen} />
					<Route exact path="/about" component={AboutScreen} />
					<Redirect to="/" />
				</Switch>
			</>
		</Router>
	);
};
