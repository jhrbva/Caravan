import React from "react";
import { Field, Form, Formik } from "formik";

import "./Signup.scss";
import "../../../utilities/fonts.scss";
import Input from "../Input/Input";
import BigButton from "../BigButton/BigButton";
import {
	validateEmail,
	validatePhone,
	required,
} from "../../../utilities/formValidation";

const Signup = () => (
	<div>
		<Formik
			initialValues={{
				email: "",
				phone: "",
			}}
			onSubmit={values => {
				// same shape as initial values
				console.log(values);
			}}
		>
			{() => (
				<Form>
					<Field
						icon='person_pin'
						type='text'
						name='first_name'
						placeholder='First Name'
						validate={required}
						autofocus='true'
						component={Input}
					/>
					<Field
						icon='person_pin'
						type='text'
						name='last_name'
						placeholder='Last Name'
						validate={required}
						autofocus='true'
						component={Input}
					/>
					<Field
						icon='call'
						type='text'
						name='phone'
						placeholder='Phone Number'
						validate={validatePhone}
						autofocus='true'
						component={Input}
					/>
					<Field
						icon='email'
						type='text'
						name='email'
						placeholder='Email'
						validate={validateEmail}
						autofocus='true'
						component={Input}
					/>
					<Field
						icon='lock'
						type='text'
						name='password'
						placeholder='Password'
						validate={required}
						autofocus='true'
						component={Input}
					/>
					<BigButton value={"Signup"} />
				</Form>
			)}
		</Formik>
	</div>
);
export default Signup;
