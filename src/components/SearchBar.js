import React, { useState } from 'react';
import '../css/gallery.css';

export const SearchBar = ({ setWord }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length > 2) {
			setWord(inputValue);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className="search-bar"
				type="text"
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	);
};
