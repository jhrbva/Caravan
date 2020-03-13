import React from 'react';

import Navbar from '../Navbar/Navbar';

function TripDetails() {
	return (
		<div>
			<Navbar />
			<div className='trip-details-wrapper'>
				<h1 className='header-text'>Name of the trip</h1>
				<h3 className='header-text-light'>Created by @host</h3>
				<h3 className='header-text-light'>Start</h3>
				<h3 className='header-text-light'>Destination</h3>
				<h4 className='header-text-light'>Guest list</h4>
				<ul>
					<li>@guestA</li>
					<li>@guestB</li>
					<li>@guestC</li>
				</ul>
			</div>
		</div>
	);
}

export default TripDetails;
