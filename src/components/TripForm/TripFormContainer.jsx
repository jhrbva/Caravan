import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { withRouter } from 'react-router';

import BigButton from '../BigButton/BigButton';

export class TripFormContainer extends React.Component {
	static Page = ({ children }) => children;

	constructor(props) {
		super(props);
		this.state = {
			page: 0,
			values: props.initialValues,
		};
	}

	nextPage = values =>
		this.setState(state => ({
			page: Math.min(state.page + 1, this.props.children.length - 1),
			values,
		}));

	previousPage = () =>
		this.setState(state => ({
			page: Math.max(state.page - 1, 0),
		}));

	onSubmit = (values, bag) => {
		const { history } = this.props;
		const {
			start_location,
			destination,
			start_date,
			start_time,
			trip_description,
			trip_title,
		} = values;
		console.log('in onSubmit', values, bag);
		axios
			.post('/trip', {
				host_id: 2,
				start_location,
				destination,
				trip_date: `${start_date} ${start_time}`,
				trip_description,
				trip_title,
			})
			.then(function(response) {
				console.log(response);
				history.push('/dashboard');
			})
			.catch(function(error) {
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
		);
	}
}

export default withRouter(TripFormContainer);
