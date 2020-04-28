import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';

import './SummaryCard.scss';
import TripDetails from '../TripDetails/TripDetails';

const SummaryCard = (props) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { trip, reststops, icon } = props;
	console.log(trip);
	const text = props.isYourTrips
		? `You are going to ${trip.destination}.`
		: `You are invited to ${trip.destination} by ${trip.username}.`;
	return (
		<>
			<Card onClick={handleShow}>
				<Card.Body className='tryingit'>
					<i className='material-icons'>{icon}</i>
					<Card.Title>{trip.trip_title}</Card.Title>
				</Card.Body>

				<Card.Body className='overridetext'>
					<Card.Text>{text}</Card.Text>
				</Card.Body>
			</Card>
			<Modal show={show} onHide={handleClose}>
				<TripDetails trip={trip} reststops={reststops} />
			</Modal>
		</>
	);
};

export default SummaryCard;
