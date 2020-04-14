import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import BigButton from '../BigButton/BigButton';
import './ActionButtons.scss';

const responseToInvitation = (response) => {
	const { userid, tripid, accepted } = response;

	axios
		.post('/invitations/accept', {
			userid,
			tripid,
			accepted,
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
};

const ActionButtons = (response) => {
	const { userid, tripid, accepted } = response;

	if (accepted === false) {
		//user has rejected invitation buttons
		return (
			<div className='rejected-msg'>
				<p>You declined this invitation. Changed your mind?</p>
				<div className='invitation-btns two-btns'>
					<BigButton
						value={'Accept Invitation'}
						onClick={() => {
							responseToInvitation({ userid, tripid, accepted: true });
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
						responseToInvitation({ userid, tripid, accepted: false });
					}}
				/>
			</div>
		);
	} else {
		// user was invited but has neither accepted or rejected the invitation yet
		return (
			<div className='invitation-btns three-btns'>
				<BigButton
					value={'Accept'}
					onClick={() => {
						responseToInvitation({ userid, tripid, accepted: true });
					}}
				/>
				<BigButton
					value={'Reject'}
					onClick={() => {
						responseToInvitation({ userid, tripid, accepted: false });
					}}
				/>
				<BigButton value={'Request Change'} />
			</div>
		);
	}
};

export default ActionButtons;
