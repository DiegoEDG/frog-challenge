import React from 'react';
import '../css/galleryfeed.css';

export const GalleryPhoto = ({ Images }) => {
	const galleryView = () => {
		document.querySelector('.popup').style.display = 'block';
		document.querySelector('.popup img').src = document
			.querySelector('.image-feed')
			.getAttribute('src');
	};

	const galleryExit = () => {
		document.querySelector('.popup').style.display = 'none';
	};
	return (
		<div className="image-container animate__animated animate__fadeIn">
			{Images.map((element) => (
				<div key={element} className="image-feed-container">
					<img
						src={`../assets/${element}.jpg`}
						className="image-feed"
						alt={element}
						onClick={galleryView}
					/>
				</div>
			))}
			<div className="popup animate__animated animate__fadeInUpBig">
				<span onClick={galleryExit}>X</span>
				<img alt="popup" src=""></img>
			</div>
		</div>
	);
};
