import React from 'react';

export const AboutItem = ({ aboutInfo }) => {
	return aboutInfo.map((element) => (
		<div
			key={element.title}
			className="content-item animate__animated animate__fadeInDown"
		>
			<div className="image-container-about">
				<img
					className="image"
					src={`../assets/${element.image}.jpg`}
					alt={element.title}
				/>
			</div>
			<h2>{element.title}</h2>
		</div>
	));
};
