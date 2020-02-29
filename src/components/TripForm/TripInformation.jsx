import React from 'react';
import { Field, Form, Formik } from 'formik';

import '../../utilities/fonts.scss';
import Input from '../Input/Input';
import BigButton from '../BigButton/BigButton';
import {
	required,
} from '../../utilities/formValidation';

const TripInformation = ({handleSubmit}) => (
	<Form>
		<Field
			icon='trip_origin'
			type='text'
			name='start_location'
			placeholder='Start Location'
			validate={required}
			autofocus='true'
			component={Input}
		/>
		<Field
			icon='location_city'
			type='text'
			name='destination'
			placeholder='Destination'
			validate={required}
			autofocus='true'
			component={Input}
		/>
		<Field
			icon='event'
			type='text'
			name='start_date'
			placeholder='Date'
			validate={required}
			autofocus='true'
			component={Input}
		/>
		<Field
			icon='schedule'
			type='text'
			name='start_time'
			placeholder='Time'
			validate={required}
			autofocus='true'
			component={Input}
		/>
		<BigButton value={'Next'} onClick={handleSubmit}/>
	</Form>
)

export default TripInformation;