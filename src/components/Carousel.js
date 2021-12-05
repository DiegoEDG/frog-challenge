import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../css/carousel.css';

export const Carousel = ({ Users }) => {
	return (
		<div className="image-container-carousel animate__animated animate__fadeIn">
			{Users.map((user) => (
				<div key={user.name} className="image-feed-container-carousel">
					<div className="carousel-items">
						<div>
							<img
								src={`../assets/${user.image}.jpg`}
								className="image-feed-carousel"
								alt={user}
							/>
						</div>
						<div className="carousel-info">
							<div className="info-user">
								<img
									className="profile-img-carousel animate__animated animate__fadeIn"
									src={`../assets/${user.photo}.jpg`}
									alt="profile"
								/>
								<div className="carousel-titles">
									<p>
										<b>{user.name}</b>
									</p>
									<p className="username">{user.username}</p>
								</div>
							</div>
							<FontAwesomeIcon
								icon={faHeart}
								size="2x"
								className="icon-fav icon-carousel animate__animated animate__fadeIn"
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
