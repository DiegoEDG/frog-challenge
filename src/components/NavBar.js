import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faSearch,
	faComment,
	faUserCircle,
	faPlus
} from '@fortawesome/free-solid-svg-icons';
import '../css/navbar.css';

export const NavBar = () => {
	return (
		<div className="navbar">
			<Link to="/home">
				<button className="navbar-button">
					<FontAwesomeIcon icon={faHome} size="lg" />
				</button>
			</Link>
			<Link to="/search">
				<button className="navbar-button">
					<FontAwesomeIcon icon={faSearch} size="lg" />
				</button>
			</Link>
			<button className="main-button">
				<FontAwesomeIcon icon={faPlus} size="lg" />
			</button>
			<button className="navbar-button">
				<FontAwesomeIcon icon={faComment} size="lg" />
			</button>
			<Link>
				<button className="navbar-button">
					<FontAwesomeIcon icon={faUserCircle} size="lg" />
				</button>
			</Link>
		</div>
	);
};
