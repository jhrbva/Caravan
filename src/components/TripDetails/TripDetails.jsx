import React from 'react';

import './TripDetails.scss';
import Navbar from '../Navbar/Navbar';

export default class TripDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tripName: '',
			tripDescription: '',
			host: '',
			date: '',
			start: '',
			destination: '',
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
				this.setState({ tripName: data[0].trip_title });
				this.setState({ tripDescription: data[0].trip_description });
				this.setState({ host: data[0].username });
				this.setState({ date: data[0].tripdate });
				this.setState({ start: data[0].startlocation });
				this.setState({ destination: data[0].destination });
			});
	}

	render() {
		return (
			<div>
				<Navbar />
				<div className='trip-details-wrapper'>
					<div className='trip-details'>
						<h1 className='header-text'>{this.state.tripName}</h1>
						<h2 className='header-text-light'>{this.state.tripDescription}</h2>
						<h3 className='header-text-light'>Created by @{this.state.host}</h3>
						<h3 className='header-text-light'>When: {this.state.date}</h3>
						<h3 className='header-text-light'>Going from {this.state.start}</h3>
						<h3 className='header-text-light'>To {this.state.destination}</h3>
						<h4 className='header-text-light'>Guest list</h4>
						<ul>
							<li>@guestA</li>
							<li>@guestB</li>
							<li>@guestC</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
