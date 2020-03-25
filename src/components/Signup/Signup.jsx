import React from 'react';
import { Field, Form, Formik } from 'formik';
import { withRouter } from 'react-router';
import axios from 'axios';

import PersonPinIcon from '@material-ui/icons/PersonPin';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import logo from '../../assets/caravan-logo-blueOnWhite.png';
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
			icon={<PersonPinIcon />}
			type='text'
			name='firstname'
			placeholder='First Name'
			validate={required}
			autoFocus={true}
			component={Input}
		/>
		<Field
			icon={<PersonPinIcon />}
			type='text'
			name='lastname'
			placeholder='Last Name'
			validate={required}
			autoFocus={false}
			component={Input}
		/>
		{/* TO DO: error message in case username already exists */}
		<Field
			icon={<PersonPinIcon />}
			type='text'
			name='username'
			placeholder='Username'
			validate={required}
			autoFocus={false}
			component={Input}
		/>
		<Field
			icon={<CallIcon />}
			type='text'
			name='phone'
			placeholder='Phone Number'
			validate={validatePhone}
			autoFocus={false}
			component={Input}
		/>
		{/* To Do: error message when the email is already in the db */}
		<Field
			icon={<EmailIcon />}
			type='text'
			name='email'
			placeholder='Email'
			validate={validateEmail}
			autoFocus={false}
			component={Input}
		/>
		<Field
			icon={<LockIcon />}
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

export const Signup = props => {
	return (
		<div>
			<img src={logo} className='caravan-logo' alt='Caravan logo' />
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
