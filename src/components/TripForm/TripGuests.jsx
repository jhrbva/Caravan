import React from 'react';
import { Field, Form, Formik } from 'formik';

import '../../utilities/fonts.scss';
import Input from '../Input/Input';
import BigButton from '../BigButton/BigButton';
import {
	required,
} from '../../utilities/formValidation';


const TripGuests = () => (
	<Form>
		<Field
			icon='group_add'
			type='text'
			name='guests'
			placeholder='Guest'
			validate={required}
			autofocus='true'
			component={Input}
		/>
		<BigButton value={'Back'} />
		<BigButton value={'Next'} />
	</Form>
)

export default TripGuests;
