import React from 'react';

import './TripDetails.scss';
import ActionButtons from '../ActionButtons/ActionButtons';
import MapSnippet from '../Map/MapSnippet';

export const getDateTime = (date) => {
	const dateOfTrip = new Date(date);

	const tripMonth = dateOfTrip.getMonth() + 1;
	const tripDay = dateOfTrip.getDate();
	const tripYear = dateOfTrip.getFullYear();

	const tripHour = dateOfTrip.getHours();
	const tripMinutes = dateOfTrip.getMinutes();

	const tripDate = `${tripMonth}/${tripDay}/${tripYear}`;
	const tripTime = `${tripHour}:${tripMinutes}0`;
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
	const {
		userid,
		host,
		reststops,
		members,
		isYourTrips,
		isPastTrip,
		rerender,
	} = props;

	console.log(tripdate);

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
				isYourTrips={isYourTrips}
				isPastTrip={isPastTrip}
				trip={props.trip}
				accepted={accepted}
				rerender={rerender}
			/>
		</div>
	);
};

export default TripDetails;
