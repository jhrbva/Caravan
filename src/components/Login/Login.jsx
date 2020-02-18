import React from 'react';
import './Login.scss';
import '../../utilities/fonts.scss';
import Input from '../Input/Input';
import BigButton from '../BigButton/BigButton';

function LoginPage() {
	return (
		<div className='login-page-wrapper'>
			{/* TODO: CA-30 create logo */}
			<h1 className='temp-logo'>Caravan</h1>
			<form action='Submit'>
				<Input
					icon='person'
					type='text'
					name='email'
					placeholder='username'
					maxLength={254}
					autofocus='true'
				/>
				<Input
					icon='vpn_key'
					type='password'
					name='password'
					placeholder='password'
					autofocus='false'
				/>
				<BigButton value='Login' />
			</form>
		</div>
	);
}

export default LoginPage;
