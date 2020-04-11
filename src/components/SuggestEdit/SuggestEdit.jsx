import React from 'react';
import axios from 'axios';

import { Field, Form, Formik } from 'formik';
import '../../utilities/fonts.scss';
import { Link } from 'react-router-dom';
import BigButton from '../BigButton/BigButton';

const submitSuggestion = (response) => {
	// const { userid, tripid, responseCode } = response;
	// axios
	// 	.post('/itineraryrequest', {
	// 		userid: userid,
	// 		tripid: tripid,
	// 		accepted: true,
	// 	})
	// 	.then(function (response) {
	// 		console.log(response);
	// 	})
	// 	.catch(function (error) {
	// 		console.log(error);
	// 	});
};

const SuggestEdit = () => {
	return (
		<Formik>
			<Form>
				<Field
					placeholder='Type your suggestions'
					autoFocus={true}
					component='textarea'
				/>
				<Link to='/dashboard'>
					<BigButton
						value={'Send'}
						// onClick={() => {
						// 	submitSuggestion({
						// 		tripid,
						// 		value,
						// 	});
						// }}
					/>
				</Link>
			</Form>
		</Formik>
	);
};

export default SuggestEdit;
