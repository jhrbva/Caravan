import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SummaryCard from '../SummaryCard/SummaryCard';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			invitations: [],
			host: [],
			members: [],
			reststops: [],
		};
	}

	componentDidMount() {
		// TO DO: add redux to dynamically import user id
		Promise.all([
			fetch('/invitations/3'),
			fetch('/members/1'),
			fetch('/reststop/1'),
		])
			.then(([response1, response2, response3]) => {
				return Promise.all([
					response1.json(),
					response2.json(),
					response3.json(),
				]);
			})
			.then(([response1, response2, response3]) => {
				this.setState({ invitations: response1 });
				this.setState({ host: response2.host[0].username });
				this.setState({ members: response2.members });
				this.setState({ reststops: response3 });
			});
	}

	render() {
		const { invitations, host, members, reststops } = this.state;
		return (
			<>
				<h1>Dashboard</h1>
				<Link to='/trip'>
					<Button variant='success'>New Trip +</Button>
				</Link>
				<h3> Invitations </h3>
				{invitations.map((invite, key) => {
					return (
						<>
							<SummaryCard
								key={key}
								trip={invite}
								host={host}
								members={members}
								reststops={reststops}
							/>
						</>
					);
				})}
			</>
		);
	}
}
