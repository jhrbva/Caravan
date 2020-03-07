import React from 'react';
import { Field, Form } from 'formik';
import '../../utilities/fonts.scss';
import Input from '../Input/Input';
import BigButton from '../BigButton/BigButton';
import { required } from '../../utilities/formValidation';

const TripGuests = ({ handleBack, handleSubmit }) => (
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
		<BigButton value={'Back'} onClick={handleBack} />
		<BigButton value={'Next'} onClick={handleSubmit} />
	</Form>
);

export default TripGuests;
