import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SummaryCard from '../SummaryCard/SummaryCard';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			invitations: [],
			Host: [],
			Members: [],
		};
	}

	componentDidMount() {
		// TO DO: add redux to dynamically import user id
		Promise.all([fetch('/invitations/3'), fetch('/members/1')])
			.then(([response1, response2]) => {
				return Promise.all([response1.json(), response2.json()])
			})
			.then(([response1, response2]) => {
				console.log(response2);
				this.setState({ invitations: response1 });
				this.setState({ Host: response2.host[0].username });
				this.setState({ Members : response2.members });
				console.log(this.state.Members[0].username);
			})

			// console.log(this.state.Members);

		// fetch('/invitations/3')
		// 	.then(response => {
		// 		// console.log(response);
		// 		return response.json();
		// 	})
		// 	.then(data => {
		// 		this.setState({ invitations: data });
		// 	});
		//
		// 	fetch('/members/1')
		// 		.then(response => {
		// 			return (
		// 				<>
		// 				{response.json()}
		// 				// {console.log(response)}
		// 				</>
		// 			);
		// 		})
		// 		.then(data => {
		// 			console.log(data);
		// 			this.setState({ Host : data.hostINFO });
		// 			this.setState({ Members : data.members });
		// 		});
	}

// getHostMembers = (tripid) => {
// 		// console.log(tripid);
// 			fetch('/members/1')
// 				.then(response => {
// 					return (
// 						<>
// 						{response.json()}
// 						// {console.log(response)}
// 						</>
// 					);
// 				})
// 				.then(data => {
// 					console.log(data);
// 					this.setState({ Host : data.hostINFO });
// 					this.setState({ Members : data.members });
// 				});
// 				// console.log(this.data.c);
// 	}

	render() {
		const { invitations } = this.state;
		// console.log(this.state.invitations);
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
						<SummaryCard key={key} trip={invite} host={this.state.Host} members={this.state.Members}/>
						</>
					);
				})}
			</>
		);
	}
}
