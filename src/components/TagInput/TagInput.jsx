import React from 'react';
import ReactTagInput from '@pathofdev/react-tag-input';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import './TagInput.scss';

const TagInput = () => {
	const [tags, setTags] = React.useState([]);
	const icon = <PersonIcon />;
	const tag = 'Guests';
	return (
		<div className='tag-input-wrapper'>
			<i className='material-icons'>{icon}</i>
			<p className='field-header'>{tag}</p>
			<ReactTagInput tags={tags} onChange={(newTags) => setTags(newTags)} />
		</div>
	);
};

export default TagInput;
