import React from 'react';
import axios from 'axios';

import { Field, Form, Formik } from 'formik';
import '../../utilities/fonts.scss';
import { Link } from 'react-router-dom';
import BigButton from '../BigButton/BigButton';

export const RequestChangeForm = () => (
	<Form>
		<Field
			placeholder='Type your suggestions'
			autoFocus={true}
			name='suggestion'
			component='textarea'
			type='textarea'
		/>
		{/* <Link to='/dashboard'> */}
		<BigButton type='submit' value='Send' />
		{/* </Link> */}
	</Form>
);

const RequestChange = (tripid) => {
	console.log(tripid);
	return (
		<Formik
			initialValues={{ value: '' }}
			onSubmit={(values) => {
				// console.log(values);
				axios
					.post('/itineraryrequest', {
						tripid: tripid,
						typeid: 2,
						value: values.value,
					})
					.then(function (response) {
						console.log(response);
					})
					.catch(function (error) {
						console.log(error);
					});
			}}
		>
			{() => <RequestChangeForm />}
		</Formik>
	);
};

export default RequestChange;
