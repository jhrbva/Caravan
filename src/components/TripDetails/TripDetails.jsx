import React from 'react';

import ActionButtons from '../ActionButtons/ActionButtons';
import './TripDetails.scss';

export const getDateTime = (date) => {
	const tripDate = date.slice(0, 10);
	const tripTime = date.slice(11, 19);
	return { tripDate, tripTime };
};

const TripDetails = (props) => {
	const {
		userid,
		tripid,
		accepted,
		trip_title,
		tripdate,
		trip_description,
		startlocation,
		destination,
	} = props.trip;

	const host = props.host;
	const members = props.members;

	const listMembers = members.map((member, key) => (
		<li key={key}>{member.username}</li>
	));

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
						<span className='trip-details-headings'>You were invited by </span>{' '}
						{host}
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
					<p>
						<span className='trip-details-headings'>Guest list</span>
					</p>
					<ul>
						<li>@guestA</li>
						<li>@guestB</li>
						<li>@guestC</li>
					</ul>
				</div>
				<ActionButtons userid={userid} tripid={tripid} accepted={accepted} />
			</div>
		</div>
	);
};

export default TripDetails;
