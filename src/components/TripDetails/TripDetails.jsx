import React from 'react';

import './TripDetails.scss';
import ActionButtons from '../ActionButtons/ActionButtons';
import MapSnippet from '../Map/MapSnippet';

export const getDateTime = (date) => {
	const tripDate = date.slice(0, 10);
	const tripTime = date.slice(11, 19);
	return { tripDate, tripTime };
};

const TripDetails = (props) => {
	const {
		tripid,
		accepted,
		trip_title,
		tripdate,
		trip_description,
		startlocation,
		destination,
	} = props.trip;
	// console.log(props);
	const { userid, host, reststops, members } = props;

	const listReststops = reststops.map((reststop, key) => (
		<li key={key}>{reststop.location}</li>
	));

	const listMembers = members.map((member, key) => (
		<li key={key}>{member.username}</li>
	));

	const { tripDate, tripTime } = getDateTime(tripdate);

	return (
		<div>
			<div className='trip-details'>
				<div className='map-snippet'>
					<MapSnippet trip={props.trip} />
				</div>
				<div className='blue-back'>
					<h1>{trip_title}</h1>
					<h3>{trip_description}</h3>
				</div>

				<p>
					Trip host: <b>@{host}</b>
				</p>
				<p>
					When: <b>{tripDate}</b>
				</p>
				<p>
					Leaving at: <b>{tripTime}</b>
				</p>
				<p>
					From: <b>{startlocation}</b>
				</p>
				<p>
					To: <b>{destination}</b>
				</p>
				<p className='no-margin-bottom'>Rest Stops:</p>
				<ul>
					<b>{listReststops}</b>
				</ul>
				<p className='no-margin-bottom'>Guests:</p>
				<ul>
					<b>{listMembers}</b>
				</ul>
			</div>
			<ActionButtons
				userid={userid}
				tripid={tripid}
				trip={props.trip}
				accepted={accepted}
			/>
		</div>
	);
};

export default TripDetails;
