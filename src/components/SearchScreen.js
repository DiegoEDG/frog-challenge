import React, { useState } from 'react';
import { Gallery } from './Gallery';
import { SearchBar } from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../css/gallery.css';
import { NavBar } from './NavBar';
import { SeeMoreButton } from './SeeMoreButton';

export const SearchScreen = () => {
	const [word, setWord] = useState('');

	return (
		<div>
			<div className="search-component">
				<div className="search-box">
					<h1 className="home-title animate__animated animate__fadeIn">
						Search
					</h1>
					<FontAwesomeIcon
						icon={faHeart}
						size="2x"
						className="icon-fav animate__animated animate__fadeIn"
					/>
				</div>
				<SearchBar setWord={setWord} />
				<h5>
					<b>ALL RESULTS</b>
				</h5>
				<ol>
					<Gallery key={word} word={word} />
				</ol>
			</div>
			{word && <SeeMoreButton />}
			<NavBar />
		</div>
	);
};
