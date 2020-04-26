import React from 'react';
import axios from 'axios';

import { Field, Form, Formik } from 'formik';
import BigButton from '../BigButton/BigButton';
import { withRouter } from 'react-router';

class RequestChange extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reqtype: '0',
		};
	}

	handleChange = (event) => {
		this.setState({ reqtype: event.target.value });
		// this.setState({ reqtype: event.target.value }, function () {
		// 	console.log('handleChange', this.state);
		// });
	};

	render() {
		const { history } = this.props;
		return (
			<Formik
				initialValues={{ request: '' }}
				onSubmit={(values) => {
					axios
						.post('/itineraryrequest', {
							tripid: this.props.history.location.tripid,
							typeid: this.state.reqtype,
							value: values.request,
						})
						.then(function () {
							history.push('/dashboard');
						})
						.catch(function (error) {
							console.log(error);
						});
				}}
			>
				<Form>
					<select
						value={this.state.value}
						onChange={this.handleChange}
						style={{ display: 'block' }}
						name='reqtype'
					>
						<option value='' label='What is your suggestion about?' />
						<option value='1' label='Destination' />
						<option value='2' label='Start Location' />
						<option value='3' label='Adding a Reststop' />
						<option value='5' label='Removing a Restop' />
						<option value='4' label='Starting Time' />
						<option value='6' label='Add Guest' />
					</select>
					<Field
						placeholder='Type your suggestions'
						autoFocus={true}
						name='request'
						component='textarea'
						type='textarea'
					/>
					<BigButton value='Send' color={'blue'} />
				</Form>
			</Formik>
		);
	}
}

export default withRouter(RequestChange);
