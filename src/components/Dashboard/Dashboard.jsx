import React from 'react';
import SummaryCard from '../SummaryCard/SummaryCard';
export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			invitations: [],
		};
	}

	componentDidMount() {
		// TO DO: add redux to dynamically import user id
		fetch('/invitations/3')
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({ invitations: data });
			});
	}
	render() {
		const { invitations } = this.state;

		return (
			<>
				<h1>Dashboard</h1>
				<h2> Invitations </h2>
				{invitations.map((invite, id) => {
					return <SummaryCard key={id} trip={invite} />;
				})}
			</>
		);
	}
}
