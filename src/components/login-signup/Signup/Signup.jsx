import React from "react";
import "./Signup.scss";
import "../../../utilities/fonts.scss";
import Input from "../Input/Input";
import BigButton from "../BigButton/BigButton";

function Signup() {
	return (
		<div className='login-page-wrapper'>
			{/* TODO: CA-30 create logo */}
			<h1 className='temp-logo'>Caravan</h1>
			<form action='Submit'>
				<Input
					icon={"person"}
					type={"text"}
					name={"email"}
					placeholder={"username"}
					maxLength={254}
					autofocus={"true"}
				></Input>
				<Input
					icon={"vpn_key"}
					type={"password"}
					name={"password"}
					placeholder={"password"}
					autofocus={"false"}
				></Input>
				<BigButton value={"Signup"}></BigButton>
			</form>
		</div>
	);
}

export default Signup();
