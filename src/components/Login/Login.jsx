import React from 'react';
import { Field, Form, Formik } from 'formik';
import { withRouter } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import logo from '../../assets/caravan-logo-blueOnWhite.png';
import Input from '../Input/Input';
import BigButton from '../BigButton/BigButton';
import { required } from '../../utilities/formValidation';
import '../../utilities/fonts.scss';

import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

export const LoginForm = () => (
	<Form>
		<Field
			icon={<PersonIcon />}
			type='text'
			name='username'
			placeholder='username'
			maxLength={254}
			autoFocus={true}
			validate={required}
			component={Input}
		/>
		<Field
			icon={<VpnKeyIcon />}
			type='password'
			name='password'
			placeholder='password'
			autoFocus={false}
			validate={required}
			component={Input}
		/>

		<BigButton value={'Login'} />
	</Form>
);

const Login = (props) => {
	const { addLoggedUser, setLogged } = props;

	return (
		<div className='login-page-wrapper'>
			<img src={logo} className='caravan-logo' alt='Caravan logo' />
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={(values) => {
					const { history } = props;
					// same shape as initial values

					axios
						.post('/login', {
							username: values.username,
							password: values.password,
						})
						.then(function (response) {
							addLoggedUser(response);
							setLogged();
							history.push('/dashboard');
						})
						.catch(function (error) {
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

const mapDispatchToProps = (dispatch) => {
	return {
		addLoggedUser: (user) => {
			dispatch({ type: 'ADD_USER', payload: user });
		},
		setLogged: () => {
			dispatch({ type: 'SIGN_IN' });
		},
	};
};

const enhance = compose(withRouter, connect(null, mapDispatchToProps));

export default enhance(Login);
