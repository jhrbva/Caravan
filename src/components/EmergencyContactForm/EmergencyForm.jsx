import React from 'react';

import EmergencyContactContainer from './EmergencyContactContainer';
import EmergencyContact from './EmergencyContact';

const EmergencyForm = (props) => (
	<>
		<EmergencyContactContainer
			userid={props.userid}
			initialValues={{
				firstname: '',
				lastname: '',
				address: '',
				phonenumber: '',
				relationship: '',
			}}
		>
			<EmergencyContact />
		</EmergencyContactContainer>
	</>
);

export default EmergencyForm;
