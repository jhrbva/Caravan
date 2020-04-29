import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import ActionButtons from '../ActionButtons/ActionButtons';
import './TripDetails.scss';

export const getDateTime = (date) => {
	const tripDate = date.slice(0, 10);
	const tripTime = date.slice(11, 19);
	return { tripDate, tripTime };
};

export const getRestStops = (reststops) => {
	if (reststops.length > 0) {
		const listReststops = reststops.map((reststop, key) => (
			<li key={key}>{reststop.location}</li>
		));
		return (
			<div>
				<span className='trip-details-headings'>Stoping at</span>
				<ul>{listReststops}</ul>
			</div>
		);
	}
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

	const { reststops } = props;

	const listMembers = members.map((member, key) => (
			<li key={key}>{member.username}</li>
		));
console.log(listMembers);
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

					{getRestStops(reststops)}

					<p>
						<span className='trip-details-headings'>Guest list</span>
					</p>

					<ul>{listMembers}</ul>

				</div>
				<ActionButtons userid={userid} tripid={tripid} accepted={accepted} />
			</div>
		</div>
	);
};

export default TripDetails;
