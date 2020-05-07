import React from 'react';
import { Field, Form, Formik } from 'formik';
import { withRouter } from 'react-router';
import axios from 'axios';

import logo from '../../assets/caravan-logo-blueOnWhite.png';
import Input from '../Input/Input';
import BigButton from '../BigButton/BigButton';
import { required } from '../../utilities/formValidation';

import PersonIcon from '@material-ui/icons/PersonOutlined';
import VpnKeyIcon from '@material-ui/icons/VpnKeyOutlined';
import './Login.scss';

export const LoginForm = () => (
	<Form>
		<Field
			icon={<PersonIcon />}
			type='text'
			tag='USERNAME'
			name='username'
			maxLength={254}
			autoFocus={true}
			validate={required}
			component={Input}
		/>
		<Field
			icon={<VpnKeyIcon />}
			type='password'
			tag='PASSWORD'
			name='password'
			autoFocus={false}
			validate={required}
			component={Input}
		/>

		<BigButton value={'Login'} />
	</Form>
);

const Login = (props) => {
	return (
		<div className='login-page-wrapper'>
			<div className='header'>
				<img
					src={logo}
					height='25px'
					className='caravan-logo'
					alt='Caravan logo'
				/>
				<h1 className='header-text'>Welcome Back</h1>
				<p className='header-subheader'> Login to continue</p>
			</div>
			<Formik
				initialValues={{
					username: '',
					password: '',
				}}
				onSubmit={(values) => {
					const { history } = props;

					axios
						.post('/login', {
							username: values.username,
							password: values.password,
						})
						.then(function (response) {
							const name =
								'Hi ' + response.data.firstname + ' ' + response.data.lastname;
							props.getUser(response.data.userid, name);
							return history.push({
								pathname: '/dashboard',
							});
						})
						.catch(function (error) {
							console.log(error);
						});
				}}
			>
				{() => <LoginForm />}
			</Formik>
			<p>
				Don't have an account yet? <a href='/signup'>Sign up!</a>
			</p>
		</div>
	);
};

export default withRouter(Login);
