import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';

import './SummaryCard.css';
import TripDetails from '../TripDetails/TripDetails';

const SummaryCard = (props) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { trip, reststops, icon, text } = props;

	return (
		<>
			<Card
				className='card'
				style={{
					//backgroundColor: 'rgb(233, 244, 255)',
					width: '18rem',
					borderRadius: '15px',
					height: '14rem',
				}}
				onClick={handleShow}
			>
				<Card.Body className='cardbody'>
					<i className='material-icons'>{icon}</i>
					<Card.Title style={{ fontWeight: '700' }} className='cardtitle'>
						{trip.trip_title}
					</Card.Title>
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
