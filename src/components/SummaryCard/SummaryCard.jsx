import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';

import './SummaryCard.scss';
import TripDetails from '../TripDetails/TripDetails';

const SummaryCard = (props) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
<<<<<<< HEAD
	const { trip, host, members, reststops, icon, isYourTrips } = props;
	const text = isYourTrips
		? `You are going to ${trip.destination}.`
		: `You are invited to ${trip.destination} by ${trip.username}.`;
=======
	const { trip, host, members, reststops } = props;
>>>>>>> 8f481f9e1de392925c3f31aae077492803c9567b

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
<<<<<<< HEAD
				<TripDetails
					trip={trip}
					host={host}
					members={members}
					reststops={reststops}
				/>
=======
				<TripDetails trip={trip} host={host} members={members} reststops={reststops}/>
>>>>>>> 8f481f9e1de392925c3f31aae077492803c9567b
			</Modal>
		</>
	);
};

export default SummaryCard;
