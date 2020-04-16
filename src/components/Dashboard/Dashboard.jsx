import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SummaryCard from '../SummaryCard/SummaryCard';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			invitations: [],
			tripsJoined: [],
			tripsHosted: [],
			host: [],
			members: [],
		};
	}

	componentDidMount() {
		// TO DO: add redux to dynamically import user id
		fetch('/invitations/3')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({ invitations: data });
			});
		fetch('/trips/2')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({ tripsJoined: data.tripsJoined });
				this.setState({ tripsHosted: data.tripsHosted });
			});
		fetch('/members/1')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({ host: data.host[0].username });
				this.setState({ members: data.members[0] });
			});
	}

	renderSection = (title, data, host, members) => {
		const nullResponse =
			title === 'Invitations' ? 'No invitations' : 'No trips';
		return (
			<>
				<h3>{title}</h3>
				<Row>
					{data.length ? (
						data.map((entry, id) => {
							return (
								<Col>
									<SummaryCard key={id} trip={entry} host={host} members={members}/>
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
		const { invitations, tripsJoined, tripsHosted, host, members } = this.state;
		return (
			<>
				<h1>Dashboard</h1>
				<Link to='/trip'>
					<Button variant='success'>New Trip +</Button>
				</Link>
				{this.renderSection('Invitations', invitations, host, members)}
				{this.renderSection('Your Trips', tripsHosted, host, members)}
				{this.renderSection('Trips Joined', tripsJoined, host, members)}
			</>
		);
	}
}
