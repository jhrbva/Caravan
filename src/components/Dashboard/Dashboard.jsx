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
			reststops: [],
		};
	}

	componentDidMount() {
		// TO DO: add redux to dynamically import user id
		Promise.all([
			fetch('/invitations/3'),
			fetch('/trips/2'),
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

	renderSection = (title, type, host, members, reststops) => {
		// console.log(title, data);
		const nullResponse =
			title === 'Invitations' ? 'No invitations' : 'No trips';
		return (
			<>
				<h3>{title}</h3>
				<Row>
					{type.length ? (
						type.map((entry, id) => {
							return (
								<Col>
									<SummaryCard
										key={id}
										trip={entry}
										host={host}
										members={members}
										reststops={reststops}
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
			member,
			reststops,
		} = this.state;

		return (
			<>
				<h1>Dashboard</h1>
				<Link to='/trip'>
					<Button variant='success'>New Trip +</Button>
				</Link>
				{this.renderSection(
					'Invitations',
					invitations,
					host,
					member,
					reststops
				)}
				{this.renderSection('Your Trips', tripsHosted, host, member, reststops)}
				{this.renderSection(
					'Trips Joined',
					tripsJoined,
					host,
					member,
					reststops
				)}
			</>
		);
	}
}
