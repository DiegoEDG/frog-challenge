import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { AboutItem } from './AboutItem';
import { aboutInfo } from '../data/data';
import '../css/about.css';

export const AboutScreen = () => {
	return (
		<div className="about-component">
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
				<AboutItem aboutInfo={aboutInfo} />
				<button className="register register-about">
					<b>REGISTER</b>
				</button>
			</div>
		</div>
	);
};
