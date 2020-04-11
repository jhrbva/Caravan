import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';

import './SummaryCard.css';
import TripDetails from '../TripDetails/TripDetails';

const SummaryCard = (props) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { trip, host, members } = props;

	return (
		<>
			<Card style={{ width: '18rem' }} onClick={handleShow}>
				<Card.Body>
					<Card.Title>{trip.trip_title}</Card.Title>
					<Card.Text>
						<>{trip.username}</>
						<>{trip.destination}</>
					</Card.Text>
				</Card.Body>
			</Card>
			<Modal show={show} onHide={handleClose}>
				<TripDetails trip={trip} host={host} members={members} />
			</Modal>
		</>
	);
};

export default SummaryCard;
