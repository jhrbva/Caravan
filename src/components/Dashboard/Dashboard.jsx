import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SummaryCard from '../SummaryCard/SummaryCard';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return { userId: state.currentUser || {}.id };
};

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			invitations: [],
			tripsJoined: [],
			tripsHosted: [],
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
	}

	renderSection = (title, data) => {
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
									<SummaryCard key={id} trip={entry} />
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
		const { invitations, tripsJoined, tripsHosted } = this.state;
		console.log(this.props.userid);
		return (
			<>
				<h1>Dashboard</h1>
				<Link to='/trip'>
					<Button variant='success'>New Trip +</Button>
				</Link>
				{this.renderSection('Invitations', invitations)}
				{this.renderSection('Your Trips', tripsHosted)}
				{this.renderSection('Trips Joined', tripsJoined)}
			</>
		);
	}
}

export default connect(mapStateToProps)(Dashboard);
