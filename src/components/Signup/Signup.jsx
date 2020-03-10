import React from 'react';
import { Field, Form, Formik } from 'formik';
import { withRouter } from 'react-router';
import axios from 'axios';

import '../../utilities/fonts.scss';
import Input from '../Input/Input';
import BigButton from '../BigButton/BigButton';
import {
	validateEmail,
	validatePhone,
	required,
	validatePassword,
} from '../../utilities/formValidation';

export const SignupForm = () => (
	<Form>
		<Field
			icon='person_pin'
			type='text'
			name='firstname'
			placeholder='First Name'
			validate={required}
			autoFocus={true}
			component={Input}
		/>
		<Field
			icon='person_pin'
			type='text'
			name='lastname'
			placeholder='Last Name'
			validate={required}
			autoFocus={false}
			component={Input}
		/>
		{/* TO DO: error message in case username already exists */}
		<Field
			icon='person_pin'
			type='text'
			name='username'
			placeholder='Username'
			validate={required}
			autoFocus={false}
			component={Input}
		/>
		<Field
			icon='call'
			type='text'
			name='phone'
			placeholder='Phone Number'
			validate={validatePhone}
			autoFocus={false}
			component={Input}
		/>
		<Field
			icon='email'
			type='text'
			name='email'
			placeholder='Email'
			validate={validateEmail}
			autoFocus={false}
			component={Input}
		/>
		<Field
			icon='lock'
			type='password'
			name='password'
			placeholder='Password'
			validate={validatePassword}
			autoFocus={false}
			component={Input}
		/>

		<BigButton value={'Sign up'} />
	</Form>
);

const Signup = props => {
	return (
		<div>
			<Formik
				initialValues={{
					firstname: '',
					lastname: '',
					username: '',
					phone: '',
					email: '',
					password: '',
				}}
				onSubmit={values => {
					const { history } = props;
					// same shape as initial values
					console.log(values);
					console.log(props);
					axios
						.post('/signup', {
							firstname: values.firstname,
							lastname: values.lastname,
							username: values.username,
							email: values.email,
							phonenumber: values.phone,
							password: values.password,
						})
						.then(function(response) {
							console.log(response);
							history.push('/trip');
						})
						.catch(function(error) {
							console.log(error);
						});
				}}
			>
				{() => <SignupForm />}
			</Formik>
			<p>Already have an account?</p>
			<a href='/'>Sign In</a>
		</div>
	);
};

export default withRouter(Signup);
