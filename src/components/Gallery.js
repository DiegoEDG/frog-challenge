import React from 'react';
import { useFetch } from './useFetch';
import { ImageItem } from './ImageItem';
import '../css/gallery.css';

export const Gallery = ({ word }) => {
	const { data, loading } = useFetch(word);

	return (
		<>
			{loading && <p className="animate__animated animate__flash">Loading</p>}

			<div className="card-grid">
				{data.map((img) => (
					<ImageItem key={img.id} {...img} className="img-item" />
				))}
			</div>
		</>
	);
};
