import React from 'react';
import { Formik } from 'formik';

import Navbar from '../Navbar/Navbar';
import TripInformation from './TripInformation';
import TripGuests from './TripGuests';
import TripRestStops from './TripRestStops';

export class TripForm extends React.Component {
	constructor(props) {
		super(props);
		this.nextPage = this.nextPage.bind(this);
		this.previousPage = this.previousPage.bind(this);
		this.state = { page: 1 };
	}

	nextPage(evt) {
		evt.preventDefault();
		this.setState({ page: this.state.page + 1 });
	}

	previousPage() {
		this.setState({ page: this.state.page - 1 });
	}

	onSubmit() {
		console.log('submitted');
	}

	render() {
		return (
			<div>
				<Navbar />
				<h1 className='header-text'>New Trip</h1>
				<Formik
					initialValues={{
						start_location: '',
						destination: '',
						start_date: '',
						start_time: '',
						guests: '',
						rest_stops: '',
					}}
					onSubmit={values => {
						// same shape as initial values
						console.log(values);
					}}
				>
					{() => (
						<>
							{this.state.page === 1 && (
								<TripInformation handleSubmit={this.nextPage} />
							)}
							{this.state.page === 2 && (
								<TripGuests
									handleSubmit={this.nextPage}
									handleBack={this.previousPage}
								/>
							)}
							{this.state.page === 3 && (
								<TripRestStops
									handleSubmit={this.onSubmit}
									handleBack={this.previousPage}
								/>
							)}
						</>
					)}
				</Formik>
			</div>
		);
	}
}

export default TripForm;
