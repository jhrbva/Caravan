import React from 'react';

import './TripDetails.scss';
import ActionButtons from '../ActionButtons/ActionButtons';
import MapSnippet from '../Map/MapSnippet';

export const getDateTime = (date) => {
	const tripDate = date.slice(0, 10);
	const tripTime = date.slice(11, 19);
	return { tripDate, tripTime };
};

export const getRestStops = (reststops) => {
	if (reststops.length > 0) {
		const listReststops = reststops.map((reststop, key) => (
			<li key={key}>
				<b>{reststop.location}</b>
			</li>
		));
		return (
			<div>
				<p>Making stops at:</p>
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

	const { reststops } = props;

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
					Trip host: <b>@Host</b>
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
				{getRestStops(reststops)}
				<p>Guests:</p>
				<ul>
					<li>
						<b>@guestA</b>
					</li>
					<li>
						<b>@guestB</b>
					</li>
					<li>
						<b>@guestC</b>
					</li>
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
