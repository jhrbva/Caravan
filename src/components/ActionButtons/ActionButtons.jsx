import React from 'react';
import axios from 'axios';

import './ActionButtons.scss';
import { Link } from 'react-router-dom';
import BigButton from '../BigButton/BigButton';
import { withRouter } from 'react-router';

class ActionButtons extends React.Component {
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
		const { history } = this.props;
		return history.push({
			pathname: '/requestchange',
			tripid: this.props.tripid,
		});
	};

	render() {
		if (this.state.accepted === false) {
			return (
				<div className='rejected-msg'>
					<p>You declined this invitation. Changed your mind?</p>
					<div className='invitation-btns two-btns'>
						{this.acceptInvitationButton('Accept Invitation')}
						<BigButton
							value={'Request Change'}
							onClick={() => {
								this.requestChangeButton();
							}}
						/>
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
					<BigButton
						value={'Request Change'}
						onClick={() => {
							this.requestChangeButton();
						}}
					/>
				</div>
			);
		}
	}
}
export default withRouter(ActionButtons);
