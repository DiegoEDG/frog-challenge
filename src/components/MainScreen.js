import '../css/App.css';

import React from 'react';

export const MainScreen = () => {
	return (
		<div>
			<div className="main-container">
				<div className="container">
					<h1 className="title">photo</h1>
					<div className="logo">
						<div className="union-1"></div>
						<div className="union-2"></div>
						<div className="union-3"></div>
						<div className="union-4"></div>
					</div>
				</div>
				<button className="about">ABOUT US</button>
			</div>
			<div className="account">
				<button className="login">
					<b>LOG IN</b>
				</button>
				<button className="register">
					<b>REGISTER</b>
				</button>
			</div>
		</div>
	);
};
