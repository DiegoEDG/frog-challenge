import React from 'react';
import '../css/galleryfeed.css';

export const GalleryPhoto = ({ Images }) => {
	return (
		<div className="image-container animate__animated animate__fadeIn">
			{Images.map((element) => (
				<div key={element} className="image-feed-container">
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
