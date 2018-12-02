import React, { Component } from 'react';
import Navbar from './AppNavbar';

const Main = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
};

export default Main;
