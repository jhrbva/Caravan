import React from 'react';
import DatePicker from 'react-datepicker';
import { useFormikContext } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';

import Input from '../Input/Input';
import './DatePickerInput.css';

const DatePickerInput = (props) => {
	const { setFieldValue } = useFormikContext();
	const { start_date } = props.field.value;
	return (
		<>
			<DatePicker
				selected={(start_date && new Date(start_date)) || new Date()}
				onChange={(val) => {
					setFieldValue('start_date', val);
				}}
				customInput={<Input {...props} />}
				dateFormat='MMMM d, yyyy h:mm aa'
				minDate={new Date() - 1}
				showTimeSelect
			/>
		</>
	);
};

export default DatePickerInput;
