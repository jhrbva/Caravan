import React from 'react';
import { Field, Form } from 'formik';
import '../../utilities/fonts.scss';
import Input from '../Input/Input';
import { required } from '../../utilities/formValidation';

const TripGuests = () => (
	<Form>
		<Field
			icon='group_add'
			type='text'
			name='guests'
			placeholder='Guest'
			validate={required}
			autoFocus={true}
			component={Input}
		/>
	</Form>
);

export default TripGuests;
