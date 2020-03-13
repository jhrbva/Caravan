import React from 'react';
import { Field, Form, Formik } from 'formik';
import '../../utilities/fonts.scss';
import Input from '../Input/Input';
import BigButton from '../BigButton/BigButton';
import {
	required,
} from '../../utilities/formValidation';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  start_location: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  destination: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  start_date: Yup.string()
    .email('Invalid email')
    .required('Required'),
	start_time: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const tripForm = () => (
	<div>
		<Formik
			initialValues={{
				start_location: '',
				destination: '',
				start_date: '',
				start_time: '',
			}}
			validationSchema={SignupSchema}
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
					<BigButton value={'Create Trip'} />
				</Form>
			)}
		</Formik>
	</div>
);
export default tripForm;
