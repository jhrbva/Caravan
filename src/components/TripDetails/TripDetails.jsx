import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './TripDetails.scss';

export const getDateTime = (date) => {
	const tripDate = date.slice(0, 10);
	const tripTime = date.slice(11, 19);
	return { tripDate, tripTime };
};

export const getRestStops = (reststops) => {
	if (reststops.length > 0) {
		return (
			<div>
				<span className='trip-details-headings'>Stoping at</span>
				<ul>
					<li>Stop 1</li>
				</ul>
			</div>
		);
	}
	console.log(reststops);
};

const TripDetails = (props) => {
	const {
		trip_title,
		tripdate,
		trip_description,
		startlocation,
		destination,
	} = props.trip;

	const { reststops } = props;

	const { tripDate, tripTime } = getDateTime(tripdate);

	return (
		<div>
			<div className='trip-details-wrapper'>
				<div className='trip-details-header'>
					<h1 className='header-text'>{trip_title}</h1>
					<h2 className='header-text-light'>{trip_description}</h2>
				</div>
				<div className='trip-details'>
					<p>
						<span className='trip-details-headings'>You were invited by </span>@
						Host
					</p>
					<p>
						<span className='trip-details-headings'>When:</span> {tripDate}
					</p>
					<p>
						<span className='trip-details-headings'>Leaving at:</span>
						{tripTime}
					</p>
					<p>
						<span className='trip-details-headings'>From</span>
						<br /> {startlocation}
					</p>
					<p>
						<span className='trip-details-headings'>To</span>
						<br /> {destination}
					</p>

					{getRestStops(reststops)}

					<p>
						<span className='trip-details-headings'>Guest list</span>
					</p>
					<ul>
						<li>@guestA</li>
						<li>@guestB</li>
						<li>@guestC</li>
					</ul>

					<Link to='/map'>
						<Button variant='success'>Start Trip</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TripDetails;
