import React from 'react';
import { Field, Form, Formik } from 'formik';

import './Login.scss';
import Input from '../Input/Input';
import BigButton from '../BigButton/BigButton';
import { required } from '../../utilities/formValidation';
import '../../utilities/fonts.scss';
import axios from 'axios';
import { withRouter } from 'react-router';

export const LoginForm = () => (
	<Form>
		<Field
			icon='person'
			type='text'
			name='email'
			placeholder='username'
			maxLength={254}
			autofocus='true'
			validate={required}
			component={Input}
		/>
		<Field
			icon='vpn_key'
			type='password'
			name='password'
			placeholder='password'
			autofocus='false'
			validate={required}
			component={Input}
		/>

		<BigButton value={'Login'} />
	</Form>
);

const Login = props => {
	return (
		<div className='login-page-wrapper'>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={values => {
					const { history } = props;
					// same shape as initial values
					console.log(values);
					console.log(props);
					axios
						.post('/login', {
							username: values.email,
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
				{() => <LoginForm />}
			</Formik>
			<p>Don't have an account yet?</p>
			<a href='/signup'>Sign up!</a>
		</div>
	);
};

export default withRouter(Login);
