import React from 'react';

import './Dashboard.scss';
import Navbar from '../Navbar/Navbar';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SummaryCard from '../SummaryCard/SummaryCard';
import { connect } from 'react-redux';
import BigButton from '../BigButton/BigButton';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

export class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			invitations: [],
			tripsJoined: [],
			tripsHosted: [],
			host: [],
			members: [],
			reststops: [],
		};
	}

	componentDidMount() {
		const { userid } = this.props.user;
		// TO DO: add redux to dynamically import user id
		Promise.all([
			fetch(`/invitations/${userid}`),
			fetch(`/trips/${userid}`),
			fetch('/members/1'),
			fetch('/reststop/1'),
		])
			.then(([response1, response2, response3, response4]) => {
				return Promise.all([
					response1.json(),
					response2.json(),
					response3.json(),
					response4.json(),
				]);
			})
			.then(([response1, response2, response3, response4]) => {
				this.setState({ invitations: response1 });
				this.setState({
					tripsJoined: response2.tripsJoined,
					tripsHosted: response2.tripsHosted,
				});
				this.setState({ host: response3.host[0].username });
				this.setState({ members: response3.members });
				this.setState({ reststops: response4 });
			});
	}

	renderSection = (title, type, host, members, reststops, icon) => {
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
										host={host}
										members={members}
										reststops={reststops}
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
		const {
			invitations,
			tripsJoined,
			tripsHosted,
			host,
			members,
			reststops,
		} = this.state;
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
							host,
							members,
							reststops,
							<MailOutlinedIcon fontSize='large' />
						)}
					</div>
					<div className='trip-section'>
						{this.renderSection(
							'Your Trips',
							tripsHosted,
							host,
							members,
							reststops,
							<CardTravelIcon fontSize='large' />
						)}
					</div>
					<div className='trip-section'>
						{this.renderSection(
							'Trips Joined',
							tripsJoined,
							host,
							members,
							reststops,
							<AirportShuttleIcon fontSize='large' />
						)}
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return { user: state.currentUser };
};

export default connect(mapStateToProps)(Dashboard);
