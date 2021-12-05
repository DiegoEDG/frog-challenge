import React from 'react';
import '../css/gallery.css';

export const ImageItem = ({ title, url }) => {
	return (
		<div className="card animate__animated animate__fadeIn">
			<img className="image-search" src={url} alt={title} />
		</div>
	);
};
