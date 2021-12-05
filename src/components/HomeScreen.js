import React from 'react';
import '../css/home.css';
import { NavBar } from './NavBar';

export const HomeScreen = () => {
	return (
		<div>
			<div className="home-component">
				<h1 className="home-title">Discover</h1>
				<h4>WHATS'S NEW TODAY</h4>
				<h4>BROWSE ALL</h4>
			</div>
			<NavBar />
		</div>
	);
};
