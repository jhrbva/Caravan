import React from 'react';
import { Field, Form, Formik } from 'formik';

import '../../utilities/fonts.scss';
import Input from '../Input/Input';
import BigButton from '../BigButton/BigButton';
import TripInformation from './TripInformation';
import TripGuests from './TripGuests';
import TripRestStops from './TripRestStops';
import {
	required,
} from '../../utilities/formValidation';

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
		console.log("submitted");
	}

	render() {
		return(
			<div>
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
								<TripInformation
									handleSubmit={this.nextPage}
									// handleBack={this.previousPage}
								/>
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
		)
	}
}

export default TripForm;