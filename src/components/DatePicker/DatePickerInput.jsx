import React from 'react';
import DatePicker from 'react-datepicker';
import { useField, useFormikContext } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';

import Input from '../Input/Input';
import './DatePickerInput.css';

const DatePickerInput = (props) => {
	const { setFieldValue } = useFormikContext();
	const [field] = useField(props);
	const { start_date } = field.value;
	return (
		<>
			<DatePicker
				selected={(start_date && new Date(start_date)) || new Date()}
				onChange={(val) => {
					setFieldValue('start_date', val);
				}}
				customInput={<Input {...props} />}
				dateFormat='MMMM d, yyyy h:mm aa'
				showTimeSelect
			/>
		</>
	);
};

export default DatePickerInput;
