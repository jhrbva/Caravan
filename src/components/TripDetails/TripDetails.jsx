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

	getDateTime = () => {
		const { date } = this.state;
		const tripDate = date.slice(0, 10);
		const tripTime = date.slice(12, 19);
		return { tripDate, tripTime };
	};

	render() {
		const { tripDate, tripTime } = this.getDateTime();
		return (
			<div>
				<Navbar />
				<div className='trip-details-wrapper'>
					<div className='trip-details-header'>
						<h1 className='header-text'>{this.state.tripName}</h1>
						<h2 className='header-text-light'>{this.state.tripDescription}</h2>
					</div>
					<div className='trip-details'>
						<p>
							<span className='trip-details-headings'>
								You were invited by{' '}
							</span>{' '}
							@{this.state.host}
						</p>
						<p>
							<span className='trip-details-headings'>When:</span> {tripDate}
						</p>
						<p>
							<span className='trip-details-headings'>Leaving at:</span>{' '}
							{tripTime}
						</p>
						<p>
							<span className='trip-details-headings'>From</span>
							<br /> {this.state.start}
						</p>
						<p>
							<span className='trip-details-headings'>To</span>
							<br /> {this.state.destination}
						</p>
						<p>
							<span className='trip-details-headings'>Guest list</span>
						</p>
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
