import { useState, useEffect } from 'react';
import { getImages } from '../helpers/getImages';

export const useFetch = (word) => {
	const [state, setState] = useState({
		data: [],
		loading: true
	});

	useEffect(() => {
		getImages(word).then((imgs) => {
			setState({
				data: imgs,
				loading: false
			});
		});
	}, [word]);

	return state;
};
