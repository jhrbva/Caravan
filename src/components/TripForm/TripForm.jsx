import React from 'react';
import { Formik } from 'formik';

import Navbar from '../Navbar/Navbar';
import BigButton from '../BigButton/BigButton';
import TripInformation from './TripInformation';
import TripGuests from './TripGuests';
import TripRestStops from './TripRestStops';

export class TripContainer extends React.Component {
	static Page = ({ children }) => children;

	constructor(props) {
		super(props);
		this.state = { page: 1, values: props.initialValues };
	}

	nextPage = event => {
		event.preventDefault();
		this.setState({ page: this.state.page + 1 });
	};

	previousPage = () => {
		this.setState({ page: this.state.page - 1 });
	};

	validate = values => {
		const activePage = React.Children.toArray(this.props.children)[
			this.state.page
		];
		return activePage.props.validate ? activePage.props.validate(values) : {};
	};

	onSubmit() {
		console.log('submitted');
	}

	render() {
		const { children } = this.props;
		const { page, values } = this.state;
		const activePage = React.Children.toArray(children)[page];

		return (
			<>
				<Navbar />
				<h1 className='header-text'>New Trip</h1>
				<Formik
					initialValues={values}
					validate={this.validate}
					onSubmit={values => {
						// same shape as initial values
						console.log(values);
					}}
				>
					<>
						{activePage}
						<div className='tripFormBtns'>
							{page === 1 && (
								<BigButton value={'Next'} onClick={this.nextPage} />
							)}
							{page === 2 && (
								<>
									<BigButton value={'Previous'} onClick={this.previousPage} />
									<BigButton value={'Next'} onClick={this.nextPage} />
								</>
							)}
							{page === 3 && (
								<>
									<BigButton value={'Previous'} onClick={this.previousPage} />
									<BigButton value={'Submit'} onClick={this.onSubmit} />
								</>
							)}
						</div>
					</>
				</Formik>
			</>
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
