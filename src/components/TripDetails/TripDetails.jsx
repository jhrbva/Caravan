import React from 'react';

import './TripDetails.scss';
import Navbar from '../Navbar/Navbar';

export const TripDetails = props => {
	return (
		<div>
			<Navbar />
			<div className='trip-details-wrapper'>
				<div className='trip-details'>
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
		</div>
	);
};

export default TripDetails;
