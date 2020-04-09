import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import BigButton from '../BigButton/BigButton';
import './ActionButtons.scss';

const responseToInvitation = (response) => {
	const { userid, tripid, responseCode } = response;
	// responseCode == 1 accepted
	// responseCode == 2 rejected
	if (responseCode === 1) {
		axios
			.post('/invitations/accept', {
				userid: userid,
				tripid: tripid,
				accepted: true,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	} else if (responseCode === 2) {
		axios
			.post('/invitations/accept', {
				userid: userid,
				tripid: tripid,
				accepted: false,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	// TO DO: once we are ready to add functionality for 'request change' we can add another responseCode here
};

const ActionButtons = (response) => {
	const { userid, tripid, accepted } = response;
	let responseCode = 0;

	if (accepted === false) {
		//user has rejected invitation buttons
		return (
			<div className='rejected-msg'>
				<p>You declined this invitation. Changed your mind?</p>
				<div className='invitation-btns two-btns'>
					<BigButton
						value={'Accept Invitation'}
						onClick={() => {
							responseCode = 1;
							responseToInvitation({
								userid,
								tripid,
								responseCode,
							});
						}}
					/>
					<BigButton value={'Request Change'} />
				</div>
			</div>
		);
	} else if (accepted === true) {
		//user has accepted invitation buttons
		return (
			<div className='invitation-btns two-btns'>
				<Link to='/map'>
					<BigButton value={'Start Trip'} />
				</Link>
				<BigButton
					value={'Leave Trip'}
					onClick={() => {
						responseCode = 2;
						responseToInvitation({
							userid,
							tripid,
							responseCode,
						});
					}}
				/>
			</div>
		);
	} else {
		// user was invited but has neither accept or rejected the invitation yet
		return (
			<div className='invitation-btns three-btns'>
				<BigButton
					value={'Accept'}
					onClick={() => {
						responseCode = 1;
						responseToInvitation({
							userid,
							tripid,
							responseCode,
						});
					}}
				/>
				<BigButton
					value={'Reject'}
					onClick={() => {
						responseCode = 2;
						responseToInvitation({
							userid,
							tripid,
							responseCode,
						});
					}}
				/>
				<BigButton value={'Request Change'} />
			</div>
		);
	}
};

export default ActionButtons;
