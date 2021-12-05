import React from 'react';
import { ChatPreview } from './ChatPreview';
import { NavBar } from './NavBar';
import '../css/chatcomponent.css';
import { chatInfo } from '../data/data';

export const ChatScreen = () => {
	return (
		<div className="chat-component">
			<h1 className="chat-title">Chats</h1>
			<ChatPreview chatInfo={chatInfo} />
			<NavBar />
		</div>
	);
};
