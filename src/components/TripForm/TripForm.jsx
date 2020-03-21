import React from 'react';
import { Formik } from 'formik';

import BigButton from '../BigButton/BigButton';
import TripInformation from './TripInformation';
import TripGuests from './TripGuests';
import TripRestStops from './TripRestStops';

export class TripContainer extends React.Component {
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
		const { children, onSubmit } = this.props;
		const { page } = this.state;
		const isLastPage = page === React.Children.count(children) - 1;
		if (isLastPage) {
			return onSubmit(values, bag);
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

const TripForm = () => (
	<>
		<TripContainer
			initialValues={{
				start_location: '',
				destination: '',
				start_date: '',
				start_time: '',
				guests: '',
				rest_stops: '',
			}}
		>
			<TripContainer.Page>
				<TripInformation />
			</TripContainer.Page>
			<TripContainer.Page>
				<TripGuests />
			</TripContainer.Page>
			<TripContainer.Page>
				<TripRestStops />
			</TripContainer.Page>
		</TripContainer>
	</>
);

export default TripForm;
