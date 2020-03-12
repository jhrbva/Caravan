// this is a preliminary version of this page
// in which all details are hardcoded.
// in the final version, all of these details will be
// passed as props so we dynamically fill them in
// with data from our db

import React from 'react';

function InvitationDetails() {
	return (
		<div className='invitation-details-wrapper'>
			<h1 className='header-text'>Name of the trip</h1>
			<h3 className='header-text-light'>@host</h3>
			<h4>Guest list</h4>
			<ul>
				<li>@guestA</li>
				<li>@guestB</li>
				<li>@guestC</li>
			</ul>
			<div className='invitation-actions'>
				<button>Reject</button>
				<button>Suggest Edit</button>
				<button>Accept</button>
			</div>
		</div>
	);
}

export default InvitationDetails;
