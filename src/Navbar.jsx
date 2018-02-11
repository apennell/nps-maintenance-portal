import React from 'react';

import './Navbar.css';
import Logo from './nps-logo.png';

const Navbar = () => (
	<div className="nav">
		<div className="nav-left">
			<img src={Logo} className="logo" />
			<p className="nav-link">Dashboard</p>
			<p className="nav-link">Create new work order</p>
			<p className="nav-link active">View work orders</p>
			<p className="nav-link">Map</p>
		</div>

		<div className="nav-right">
			<p className="nav-link nav-name">J. Muir</p>
			<i className="fa fa-user-circle-o fa-2x nav-user"/>
		</div>
	</div>
);

export default Navbar;