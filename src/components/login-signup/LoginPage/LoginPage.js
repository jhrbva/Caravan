import React from 'react';
import './LoginPage.scss';
import '../../../utilities/fonts.scss';
import Input from '../Input/Input';
import BigButton from '../BigButton/BigButton';

class LoginPage extends React.Component {
	render() {
		return (
			<div className="login-page-wrapper">
				{/* TODO: CA-30 create logo */}
				<h1 className="temp-logo">Caravan</h1>
				<form action="Submit">
					<Input
						icon={'person'}
						type={'text'}
						name={'email'}
						placeholder={'username'}
						autofocus={'true'}
					></Input>
					<Input
						icon={'vpn_key'}
						type={'password'}
						name={'password'}
						placeholder={'password'}
						autofocus={'false'}
					></Input>
					<BigButton value={'Login'}></BigButton>
				</form>
			</div>
		);
	}
}

export default LoginPage;
