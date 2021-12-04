import React from 'react';
import { Link } from 'react-router-dom';

import '../css/App.css';

export const MainScreen = () => {
	return (
		<div>
			<div className="main-container">
				<div className="container">
					<h1 className="title animate__animated animate__backInRight">
						photo
					</h1>
					<div className="logo">
						<div className="union-1"></div>
						<div className="union-2"></div>
						<div className="union-3"></div>
						<div className="union-4"></div>
					</div>
				</div>
				<Link to="/about">
					<button className="about">ABOUT US</button>
				</Link>
			</div>
			<div className="account">
				<Link to="/home">
					<button to="/home" className="login">
						<b>LOG IN</b>
					</button>
				</Link>
				<button className="register">
					<b>REGISTER</b>
				</button>
			</div>
		</div>
	);
};
