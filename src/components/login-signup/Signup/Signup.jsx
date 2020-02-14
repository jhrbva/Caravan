import React from "react";
import "./Signup.scss";
import "../../../utilities/fonts.scss";
import Input from "../Input/Input";
import BigButton from "../BigButton/BigButton";
import { Field, Form, Formik } from "formik";
import {
	validateEmail,
	validatePhone,
} from "../../../utilities/formValidation";

const Signup = () => (
	<div>
		<Formik
			initialValues={{
				username: "",
				email: "",
			}}
			onSubmit={values => {
				// same shape as initial values
				console.log(values);
			}}
		>
			{({ errors, touched, isValidating }) => (
				<Form>
					<Field
						icon='email'
						type='text'
						name='email'
						placeholder='Email'
						validate={validateEmail}
						autofocus='true'
						className={errors.email && touched.email && "error"}
						component={Input}
					/>
					{errors.email && touched.email && (
						<div className='error'>{errors.email}</div>
					)}
					<Field
						icon='call'
						type='text'
						name='phone'
						placeholder='Phone Number'
						validate={validatePhone}
						autofocus='true'
						className={errors.phone && touched.phone && "error"}
						component={Input}
					/>
					{errors.phone && touched.phone && (
						<div className='error'>{errors.phone}</div>
					)}
					<BigButton value={"Signup"} />
				</Form>
			)}
		</Formik>
	</div>
);
export default Signup;
