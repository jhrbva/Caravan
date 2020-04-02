import React from 'react';
import { Field } from 'formik';
import '../../utilities/fonts.scss';
import Input from '../Input/Input';
import { required } from '../../utilities/formValidation';

const TripGuests = () => (
	<>
		<Field
			icon='group_add'
			type='text'
			name='guests'
			placeholder='Guest'
			validate={required}
			autoFocus={true}
			component={Input}
		/>
	</>
);

export default TripGuests;
