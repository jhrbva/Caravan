import React from 'react';

import './Dashboard.scss';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SummaryCard from '../SummaryCard/SummaryCard';
import BigButton from '../BigButton/BigButton';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			invitations: [],
			tripsJoined: [],
			tripsHosted: [],
		};
	}

	componentDidMount() {
		Promise.all([
			fetch(`/trips/${this.props.userid}`),
			fetch(`/invitations/${this.props.userid}`),
		])
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
		if (this.props.userid === 0) {
			return (
				<>
					<p>
						Hi there! <br /> Login first to see your trips
					</p>
					<Link to='/'>
						<BigButton value={'Login'} />
					</Link>
				</>
			);
		} else {
			const { invitations, tripsJoined, tripsHosted } = this.state;
			return (
				<>
					<div className='dashboard-wrapper'>
						<Link to='/trip'>
							<BigButton value='+ New Trip' color={'green'} />
						</Link>
						<span></span>
						<Link to='/ec'>
							<BigButton value='Update Emergency Contact' color={'blue'} />
						</Link>

						<div className='trip-section'>
							{this.renderSection(
								'Invitations',
								invitations,
								<MailOutlinedIcon fontSize='large' />
							)}
						</div>
						<div className='trip-section'>
							{this.renderSection(
								'Your Trips',
								tripsHosted,
								<CardTravelIcon fontSize='large' />
							)}
						</div>
						<div className='trip-section'>
							{this.renderSection(
								'Trips Joined',
								tripsJoined,
								<AirportShuttleIcon fontSize='large' />
							)}
						</div>
					</div>
				</>
			);
		}
	}
}
