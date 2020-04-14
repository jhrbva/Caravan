import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import BigButton from '../BigButton/BigButton';
import './ActionButtons.scss';

export default class ActionButtons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			accepted: this.props.accepted,
		};
	}

	responseToInvitation = () => {
		axios
			.post('/invitations/accept', {
				userid: this.props.userid,
				tripid: this.props.tripid,
				accepted: this.state.accepted,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	acceptInvitationButton = (value) => {
		return (
			<BigButton
				value={value}
				onClick={() => {
					this.setState({ accepted: true }, function () {
						this.responseToInvitation();
					});
				}}
			/>
		);
	};

	rejectInvitationButton = (value) => {
		return (
			<BigButton
				value={value}
				onClick={() => {
					this.setState({ accepted: false }, function () {
						this.responseToInvitation();
					});
				}}
			/>
		);
	};

	requestChangeButton = () => {
		return <BigButton value={'Request Change'} />;
	};

	render() {
		if (this.state.accepted === false) {
			return (
				<div className='rejected-msg'>
					<p>You declined this invitation. Changed your mind?</p>
					<div className='invitation-btns two-btns'>
						{this.acceptInvitationButton('Accept Invitation')}
						{this.requestChangeButton()}
					</div>
				</div>
			);
		} else if (this.state.accepted === true) {
			return (
				<div className='invitation-btns two-btns'>
					<Link to='/map'>
						<BigButton value={'Start Trip'} />
					</Link>
					{this.rejectInvitationButton('Leave Trip')}
				</div>
			);
		} else {
			return (
				<div className='invitation-btns three-btns'>
					{this.acceptInvitationButton('Accept')}
					{this.rejectInvitationButton('Reject')}
					{this.requestChangeButton()}
				</div>
			);
		}
	}
}
