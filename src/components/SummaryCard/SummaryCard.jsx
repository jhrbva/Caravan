import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';

import './SummaryCard.scss';
import TripDetails from '../TripDetails/TripDetails';

const SummaryCard = (props) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const {
		trip,
		host,
		members,
		reststops,
		icon,
		isYourTrips,
		isPastTrip,
		rerender,
	} = props;

	const text = isYourTrips
		? `You are going to ${trip.destination}.`
		: `You are invited to ${trip.destination} by ${trip.hostname}.`;

	return (
		<>
			<Card onClick={handleShow}>
				<i className='material-icons'>{icon}</i>
				<Card.Title>{trip.trip_title}</Card.Title>
				<Card.Body>
					<Card.Text>{text}</Card.Text>
				</Card.Body>
			</Card>
			<Modal show={show} onHide={handleClose}>
				<TripDetails
					userid={props.userid}
					isYourTrips={isYourTrips}
					isPastTrip={isPastTrip}
					trip={trip}
					host={host}
					members={members}
					reststops={reststops}
					rerender={rerender}
				/>
			</Modal>
		</>
	);
};

export default SummaryCard;
