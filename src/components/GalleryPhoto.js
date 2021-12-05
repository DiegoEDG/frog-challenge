import React from 'react';
import '../css/galleryfeed.css';

export const GalleryPhoto = ({ feedImages }) => {
	return (
		<div className="image-container animate__animated animate__fadeIn">
			{feedImages.map((element) => (
				<div className="image-feed-container">
					<img
						src={`../assets/${element}.jpg`}
						className="image-feed"
						alt={element}
					/>
				</div>
			))}
		</div>
	);
};
