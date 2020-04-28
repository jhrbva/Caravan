import React from 'react';
import { Field } from 'formik';
import { required } from '../../utilities/formValidation';
import TagInput from '../TagInput/TagInput';

import GroupAddIcon from '@material-ui/icons/GroupAdd';

const TripGuests = () => (
	<>
		<Field
			icon={<GroupAddIcon />}
			type='text'
			name='guests'
			tag='GUESTS'
			validate={required}
			autoFocus={true}
			component={TagInput}
		/>
	</>
);

export default TripGuests;
