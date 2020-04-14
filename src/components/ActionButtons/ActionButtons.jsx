import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import BigButton from '../BigButton/BigButton';
import './ActionButtons.scss';
import RequestChange from '../RequestChange/RequestChange';

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
		return (
			<div className='rejected-msg'>
				<p>You declined this invitation. Changed your mind?</p>
				<div className='invitation-btns rejected'>
					<BigButton
						value={'Accept Invitation'}
						onClick={() => {
							responseToInvitation({ userid, tripid, accepted: true });
						}}
					/>
					<Link to='/requestchange'>
						<BigButton
							value={'Request Change'}
							onClick={() => <RequestChange props={tripid} />}
						/>
					</Link>
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
						responseToInvitation({ userid, tripid, accepted: true });
					}}
				/>
				<BigButton
					value={'Reject'}
					onClick={() => {
						responseToInvitation({ userid, tripid, accepted: false });
					}}
				/>
				<Link to='/suggestedit'>
					<BigButton value={'Request Change'} />
				</Link>
			</div>
		);
	}
};

export default ActionButtons;
