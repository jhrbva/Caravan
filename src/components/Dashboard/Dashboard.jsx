import React from 'react';

import './Dashboard.scss';
import Navbar from '../Navbar/Navbar';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SummaryCard from '../SummaryCard/SummaryCard';
import BigButton from '../BigButton/BigButton';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import { withRouter } from 'react-router';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			invitations: [],
			tripsJoined: [],
			tripsHosted: [],
			// host: [],
			// members: [],
			// reststops: [],
		};
	}

	componentDidMount() {
		// fetch(`/trips/${this.props.history.location.userid}`)
		Promise.all([fetch('/trips/1'), fetch('/invitations/1')])
			.then(([dataTrips, dataInvitations]) => {
				return Promise.all([dataTrips.json(), dataInvitations.json()]);
			})
			.then(([dataTrips, dataInvitations]) => {
				this.setState({
					tripsHosted: dataTrips.tripsHosted,
					tripsJoined: dataTrips.tripsJoined,
					invitations: dataInvitations,
				});
			});
	}

	// renderSection = (title, type, host, members, reststops, icon) => {
	renderSection = (title, type, icon) => {
		const isYourTrips = title === 'Your Trips' ? true : false;
		const nullResponse =
			title === 'Invitations' ? 'No invitations' : 'No trips';

		return (
			<>
				<h2>{title}</h2>
				<Row>
					{type.length ? (
						type.map((entry, id) => {
							return (
								<Col md={4}>
									<SummaryCard
										key={id}
										trip={entry}
										icon={icon}
										host={entry.hostname}
										members={entry.members}
										reststops={entry.reststops}
										isYourTrips={isYourTrips}
									/>
								</Col>
							);
						})
					) : (
						<p>{nullResponse}</p>
					)}
				</Row>
			</>
		);
	};

	render() {
		// console.log(this.props.history.location.userid);
		const {
			invitations,
			tripsJoined,
			tripsHosted,
			// host,
			// members,
			// reststops,
		} = this.state;
		console.log(tripsHosted);
		return (
			<>
				<Navbar />
				<div className='dashboard-wrapper'>
					<Link to='/trip'>
						<BigButton value='+ New Trip' color={'green'} />
					</Link>

					<div className='trip-section'>
						{this.renderSection(
							'Invitations',
							invitations,
							// host,
							// members,
							// reststops,
							<MailOutlinedIcon fontSize='large' />
						)}
					</div>
					<div className='trip-section'>
						{this.renderSection(
							'Your Trips',
							tripsHosted,
							// host,
							// members,
							// reststops,
							<CardTravelIcon fontSize='large' />
						)}
					</div>
					<div className='trip-section'>
						{this.renderSection(
							'Trips Joined',
							tripsJoined,
							// host,
							// members,
							// reststops,
							<AirportShuttleIcon fontSize='large' />
						)}
					</div>
				</div>
			</>
		);
	}
}

export default withRouter(Dashboard);
