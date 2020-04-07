import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import BigButton from '../BigButton/BigButton';
import './ActionButtons.scss';

const responseToInvitation = (response) => {
	const { userid, tripid, responseCode } = response;

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
		return (
			<div className='rejected-msg'>
				<p>You declined this invitation. Changed your mind?</p>
				<div className='invitation-btns rejected'>
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
		return (
			<div className='invitation-btns'>
				<Link to='/map' className='start-trip-btn'>
					<BigButton value={'Start Trip'} />
				</Link>
			</div>
		);
	} else {
		return (
			<div className='invitation-btns'>
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
