import React from 'react';
import axios from 'axios';

import { Field, Form, Formik } from 'formik';
import BigButton from '../BigButton/BigButton';
import { withRouter } from 'react-router';
import EditIcon from '@material-ui/icons/Edit';
import TextArea from '../TextArea/TextArea';

import './RequestChange.scss';

class RequestChange extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reqtype: '0',
		};
	}

	handleChange = (event) => {
		this.setState({ reqtype: event.target.value });
	};

	onBackClick = (history, userid) => {
		history.push({
			pathname: '/dashboard',
			userid: userid,
		});
	};

	render() {
		const { history } = this.props;
		const { userid } = history.location;
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
							history.push({
								pathname: '/dashboard',
								userid: userid,
							});
						})
						.catch(function (error) {
							console.log(error);
						});
				}}
			>
				<Form>
					<div className='input-wrapper'>
						<select
							value={this.state.value}
							onChange={this.handleChange}
							style={{ display: 'block' }}
							name='reqtype'
							className='input-outlined'
							autoFocus={true}
						>
							<option value='' label='What is your suggestion about?' />
							<option value='1' label='Destination' />
							<option value='2' label='Start Location' />
							<option value='3' label='Adding a Reststop' />
							<option value='5' label='Removing a Restop' />
							<option value='4' label='Starting Time' />
							<option value='6' label='Add Guest' />
						</select>
					</div>
					<Field
						placeholder='Type your suggestions'
						name='request'
						component={TextArea}
						icon={<EditIcon />}
						tag='SUGGESTION DETAILS'
						type='textarea'
						className='input-outlined'
					/>
					<BigButton value='Send' />
					<br />
					<BigButton
						value='Back to Dashboard'
						type='button'
						onClick={() => this.onBackClick(history, userid)}
					/>
				</Form>
			</Formik>
		);
	}
}

export default withRouter(RequestChange);
