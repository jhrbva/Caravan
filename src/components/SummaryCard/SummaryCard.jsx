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
		? `You are going to ${trip.destination}`
		: `You are invited by ${trip.username}`;
	return (
		<>
			<Card
				className='card'
				style={{
					width: '18rem',
					borderRadius: '30px',
					height: '14rem',
				}}
				onClick={handleShow}
			>
				<Card.Body>
					<i className='material-icons'>{icon}</i>
					<Card.Title>{trip.trip_title}</Card.Title>
					<Card.Text style={{ fontSize: '17px' }}>{text}</Card.Text>
				</Card.Body>
			</Card>
			<Modal show={show} onHide={handleClose}>
				<TripDetails trip={trip} reststops={reststops} />
			</Modal>
		</>
	);
};

export default SummaryCard;
