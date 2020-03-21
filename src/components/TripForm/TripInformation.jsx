import React from 'react';
import { Field } from 'formik';
import '../../utilities/fonts.scss';
import Input from '../Input/Input';
import { required } from '../../utilities/formValidation';

const TripInformation = () => (
	<>
		<Field
			icon='trip_origin'
			type='text'
			name='start_location'
			placeholder='Start Location'
			validate={required}
			autoFocus={true}
			component={Input}
		/>
		<Field
			icon='location_city'
			type='text'
			name='destination'
			placeholder='Destination'
			validate={required}
			autoFocus={false}
			component={Input}
		/>
		<Field
			icon='event'
			type='text'
			name='start_date'
			placeholder='Date'
			validate={required}
			autoFocus={false}
			component={Input}
		/>
		<Field
			icon='schedule'
			type='text'
			name='start_time'
			placeholder='Time'
			validate={required}
			autoFocus={false}
			component={Input}
		/>
	</>
);

export default TripInformation;
