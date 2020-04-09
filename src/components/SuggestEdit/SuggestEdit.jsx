import React from 'react';
import { Field, Form, Formik } from 'formik';
import '../../utilities/fonts.scss';
import { Link } from 'react-router-dom';
import BigButton from '../BigButton/BigButton';

const SuggestEdit = () => {
	return (
		<Formik>
			<Form>
				<Field
					placeholder='Type your suggestions'
					autoFocus={true}
					component='textarea'
				/>
				<Link to='/dashboard'>
					<BigButton value={'Send'} />
				</Link>
			</Form>
		</Formik>
	);
};

export default SuggestEdit;
