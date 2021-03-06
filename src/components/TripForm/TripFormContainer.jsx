import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { withRouter } from 'react-router';

import Navbar from '../Navbar/Navbar';
import BigButton from '../BigButton/BigButton';
//import { getLatLng } from '../Map/geocode';

export class TripFormContainer extends React.Component {
	static Page = ({ children }) => children;

	constructor(props) {
		super(props);
		this.state = {
			page: 0,
			values: props.initialValues,
		};
	}

	nextPage = (values) =>
		this.setState((state) => ({
			page: Math.min(state.page + 1, this.props.children.length - 1),
			values,
		}));

	previousPage = () =>
		this.setState((state) => ({
			page: Math.max(state.page - 1, 0),
		}));

	pgFormatDate = (date) => {
		return date.toISOString().replace('T', ' ').replace('Z', '');
	};

	onSubmit = (values, bag) => {
		const { history } = this.props;
		const {
			start_location,
			destination,
			start_date,
			trip_description,
			trip_title,
			guests,
		} = values;

		// get lat long of rest stops.
		// getLatLong(rest_stops).then((data) => console.log(data));

		axios
			.post('/trip', {
				host_id: 16,
				start_location: start_location.name,
				destination: destination.name,
				trip_date: this.pgFormatDate(start_date),
				trip_description,
				trip_title,
				start_long: start_location.lng,
				start_lat: start_location.lat,
				dest_long: destination.lng,
				dest_lat: destination.lat,
			})
			.then(function (response) {
				fetch(`/user/${guests}`)
					.then((res) => {
						return res.json();
					})
					.then((info) => {
						axios.post('/invitations', {
							host_id: 16,
							user_id: info[0].userid,
							trip_id: response.data,
						});
					});
				history.push('/dashboard');
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	handleSubmit = (values, bag) => {
		const { children } = this.props;
		const { page } = this.state;
		const isLastPage = page === React.Children.count(children) - 1;
		if (isLastPage) {
			return this.onSubmit(values, bag);
		} else {
			bag.setTouched({});
			bag.setSubmitting(false);
			this.nextPage(values);
		}
	};

	render() {
		const { children } = this.props;
		const { page, values } = this.state;
		const activePage = React.Children.toArray(children)[page];
		const isLastPage = page === React.Children.count(children) - 1;

		return (
			<>
				<Navbar />
				<Formik
					initialValues={values}
					enableReinitialize={false}
					onSubmit={this.handleSubmit}
					render={({ values, handleSubmit, isSubmitting, handleReset }) => (
						<form onSubmit={handleSubmit}>
							{activePage}
							<div className='buttons'>
								{page > 0 && (
									<BigButton
										type='button'
										onClick={this.previousPage}
										value='Previous'
									/>
								)}

								{!isLastPage && <BigButton type='submit' value='Next' />}
								{isLastPage && (
									<BigButton
										type='submit'
										value='Submit'
										disabled={isSubmitting}
									/>
								)}
							</div>
						</form>
					)}
				/>
			</>
		);
	}
}

export default withRouter(TripFormContainer);
