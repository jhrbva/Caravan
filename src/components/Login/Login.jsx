import React from 'react';
import { Field, Form, Formik } from 'formik';

import './Login.scss';
import Input from '../Input/Input';
import BigButton from '../BigButton/BigButton';
import { required } from '../../utilities/formValidation';
import '../../utilities/fonts.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Login() {
	return (
		<Router>
			<Route exact path='/'>
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
								<p>Don't have an account yet?</p>
								<Switch>
									<Link to='/signup'>Sign up!</Link>
								</Switch>
							</Form>
						)}
					</Formik>
				</div>
			</Route>
		</Router>
	);
}

export default Login;
