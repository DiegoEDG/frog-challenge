import React from 'react';
import '../css/chatitem.css';

export const ChatPreview = ({ chatInfo }) => {
	return (
		<div className="chat-item">
			{chatInfo.map((user) => (
				<div className="chat-box">
					<img
						className="profile-img-chat animate__animated animate__fadeIn"
						src={`../assets/${user.photo}.jpg`}
						alt="profile"
					/>
					<div className="chat-text">
						<h4 className="username-chat">
							<b>{user.name}</b>
						</h4>
						<p className="chat-message">{user.message}</p>
					</div>
				</div>
			))}
		</div>
	);
};
