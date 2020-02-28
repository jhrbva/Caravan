import React from 'react';
import { Field, Form, Formik } from 'formik';

import '../../utilities/fonts.scss';
import Input from '../Input/Input';
import BigButton from '../BigButton/BigButton';
import {
	required,
} from '../../utilities/formValidation';


const TripRestStops = () => (
	<Form>
		<Field
			icon='restStop_add'
			type='text'
			name='rest_stops'
			placeholder='Rest Stop'
			validate={required}
			autofocus='true'
			component={Input}
		/>
		<BigButton value={'Submit'} />
	</Form>
)

export default TripRestStops;
