import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { withRouter } from 'react-router';

import Navbar from '../Navbar/Navbar';
import BigButton from '../BigButton/BigButton';

export class EmergencyContactContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: props.initialValues,
		};
	}
	onSubmit = (values, bag) => {
		const { history, userid } = this.props;
		console.log(userid);
		const { firstname, lastname, address, phonenumber, relationship } = values;

		axios
			.post('/emergency', {
				address,
				firstname,
				lastname,
				phonenumber,
				relationship,
			})
			.then(function (response) {
				console.log(response.data);
				axios.put(`/emergency/${userid}/${response.data}`, {});
				history.push('/dashboard');
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	handleSubmit = (values, bag) => {
		return this.onSubmit(values, bag);
	};

	render() {
		const { values } = this.state;
		return (
			<>
				<Navbar />
				<Formik
					initialValues={values}
					enableReinitialize={false}
					onSubmit={this.handleSubmit}
					render={({ values, handleSubmit, isSubmitting, handleReset }) => (
						<form onSubmit={handleSubmit}>
							{this.props.children}
							<div className='buttons'>
								<BigButton
									type='submit'
									value='Submit'
									disabled={isSubmitting}
								/>
							</div>
						</form>
					)}
				/>
			</>
		);
	}
}

export default withRouter(EmergencyContactContainer);
