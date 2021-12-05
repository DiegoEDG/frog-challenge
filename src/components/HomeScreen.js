import React from 'react';
import '../css/home.css';
import { Carousel } from './Carousel';
import { GalleryPhoto } from './GalleryPhoto';
import { NavBar } from './NavBar';
import { users, imagesHome } from '../data/data';

export const HomeScreen = () => {
	return (
		<div>
			<div className="home-component animate__animated animate__fadeIn">
				<h1 className="home-title">Discover</h1>
				<h4 className="title-home">WHATS'S NEW TODAY</h4>
				<Carousel Users={users} />
				<h4 className="title-home">BROWSE ALL</h4>
			</div>
			<GalleryPhoto Images={imagesHome} />
			<NavBar />
		</div>
	);
};
