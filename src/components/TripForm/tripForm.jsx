import React from 'react';
import { Field, Form, Formik } from 'formik';

import '../../utilities/fonts.scss';
import Input from '../Input/Input';
import BigButton from '../BigButton/BigButton';
import {
	required,
} from '../../utilities/formValidation';

const tripForm = () => (
	<div>
		<Formik
			initialValues={{
				first_name: '',
				last_name: '',
				phone: '',
				email: '',
				password: '',
			}}
			onSubmit={values => {
				// same shape as initial values
				console.log(values);
			}}
		>
			{() => (
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
						name='Destination'
						placeholder='Destination'
						validate={required}
						autofocus='true'
						component={Input}
					/>
					<Field
						icon='event'
						type='text'
						name='date'
						placeholder='Date'
						validate={required}
						autofocus='true'
						component={Input}
					/>
					<Field
						icon='schedule'
						type='text'
						name='time'
						placeholder='Time'
						validate={required}
						autofocus='true'
						component={Input}
					/>
					<BigButton value={'Create Trip'} />
				</Form>
			)}
		</Formik>
	</div>
);
export default tripForm;
