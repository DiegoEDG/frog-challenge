import React from 'react';
import '../css/profile.css';
import { GalleryPhoto } from './GalleryPhoto';
import { NavBar } from './NavBar';

export const ProfileScreen = () => {
	const feedImages = [
		'feed-f1',
		'feed-f2',
		'feed-f3',
		'feed-f4',
		'feed-f5',
		'feed-f6'
	];
	return (
		<div>
			<div className="profile">
				<img
					className="profile-img animate__animated animate__fadeIn"
					src="../assets/profile.jpg"
					alt="profile"
				/>
				<div className="titles animate__animated animate__fadeIn">
					<h1>Jane</h1>
					<h6>SAN FRANCISCO, CA.</h6>
				</div>
				<div className="buttons animate__animated animate__fadeIn">
					<button className="follow">
						<b>FOLLOW JANE</b>
					</button>
					<button className="message">
						<b>MESSAGE</b>
					</button>
				</div>
			</div>
			<GalleryPhoto feedImages={feedImages} />
			<NavBar />
		</div>
	);
};
