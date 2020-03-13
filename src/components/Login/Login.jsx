import React from 'react';
import { Field, Form, Formik } from 'formik';
import './Login.scss';
import Input from '../Input/Input';
import BigButton from '../BigButton/BigButton';
import { required } from '../../utilities/formValidation';
import '../../utilities/fonts.scss';
import * as Yup from 'yup';

function Login() {
	return (
		<div className='login-page-wrapper'>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={values => {
					// same shape as initial values
					console.log(values);
				}}
			>
				{() => (
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
				)}
			</Formik>
			<p>Don't have an account yet?</p>
			<a href='/signup'>Sign up!</a>
		  <a href='/auth/facebook'>Login with Facebook</a>
			<a href='/auth/google'>Login with Google</a>
		</div>
	);
}

export default Login;
