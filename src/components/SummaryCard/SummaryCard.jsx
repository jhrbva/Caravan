import React from 'react';
import { Card, Modal } from 'react-bootstrap';

import './SummaryCard.css';
import TripDetails from '../TripDetails/TripDetails';

export default class SummaryCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tripName: '',
			host: '',
			destination: '',
			show: false,
		};
	}

	componentDidMount() {
		// TO DO: add redux to dynamically import user id
		fetch('/invitations/3')
			.then(response => {
				return response.json();
			})
			.then(data => {
				console.log(data);
				this.setState({
					tripName: data[0].trip_title,
				});
				this.setState({
					host: data[0].username,
				});
				this.setState({ destination: data[0].destination });
			});
	}

	handleClose = () => this.setState({ show: false });
	handleShow = () => this.setState({ show: true });

	render() {
		const { show, tripName, host, destination } = this.state;
		return (
			<>
				<Card style={{ width: '18rem' }} onClick={this.handleShow}>
					<Card.Body>
						<Card.Title>{tripName}</Card.Title>
						<Card.Text>
							<>{host}</>
							<>{destination}</>
						</Card.Text>
					</Card.Body>
				</Card>
				<Modal show={show} onHide={this.handleClose}>
					<TripDetails />
				</Modal>
			</>
		);
	}
}
