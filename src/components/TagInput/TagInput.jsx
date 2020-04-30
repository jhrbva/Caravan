import React from 'react';
import ReactTagInput from '@pathofdev/react-tag-input';
import { useFormikContext } from 'formik';
import './TagInput.scss';

const TagInput = (props) => {
	const { setFieldValue } = useFormikContext();
	const [tags, setTags] = React.useState([]);
	const { icon, tag, field } = props;

	return (
		<div className='tag-input-wrapper'>
			<i className='material-icons'>{icon}</i>
			<p className='field-header'>{tag}</p>
			<ReactTagInput
				tags={tags}
				onChange={(newTags) => {
					setTags(newTags);
					setFieldValue(field.name, newTags);
				}}
			/>
		</div>
	);
};

export default TagInput;
