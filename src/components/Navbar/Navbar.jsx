import React from 'react';

import './Navbar.scss';
import logo from '../../assets/caravan-logo-whiteOnBlue.png';

function Navbar({ name }) {
	return (
		<div className='navbar-wrapper'>
			<img src={logo} className='caravan-logo-navbar' alt='Caravan logo' />
			<p>{name}</p>
		</div>
	);
}

export default Navbar;
