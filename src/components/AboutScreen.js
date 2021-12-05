import React from 'react';
import '../css/about.css';
import '../css/App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const AboutScreen = () => {
	return (
		<div>
			<Link to="/">
				<FontAwesomeIcon
					icon={faChevronLeft}
					className="icon animate__animated animate__fadeInDown"
				/>
			</Link>
			<h1 className="about-title animate__animated animate__fadeInDown">
				WHAT I CAN DO IN PHOTO?
			</h1>
			<div className="content">
				<div className="content-item animate__animated animate__fadeInDown">
					<div className="image-container">
						<img className="image" src="../assets/collage.jpg" alt="collage" />
					</div>
					<h2>Collages</h2>
				</div>
				<div className="content-item animate__animated animate__fadeInDown">
					<div className="image-container">
						<img className="image" src="../assets/neon.jpg" alt="neon" />
					</div>
					<h2>Edition</h2>
				</div>
				<div className="content-item animate__animated animate__fadeInDown">
					<div className="image-container">
						<img className="image" src="../assets/share.jpg" alt="share" />
					</div>
					<h2>Connect with friends</h2>
				</div>
				<button className="register register-about">
					<b>REGISTER</b>
				</button>
			</div>
		</div>
	);
};
