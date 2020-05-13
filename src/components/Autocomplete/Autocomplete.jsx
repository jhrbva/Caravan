import React, { useRef } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import './Autocomplete.scss';
import { useFormikContext } from 'formik';
import { getLatLng } from '../Map/geocode';

const PlacesAutocomplete = (props) => {
	const { tag, icon, field } = props;
	const { setFieldValue } = useFormikContext();
	const {
		ready,
		value,
		suggestions: { status, data },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		requestOptions: {},
		debounce: 300,
	});
	const ref = useRef();
	useOnclickOutside(ref, () => {
		// When user clicks outside of the component, we can dismiss
		// the searched suggestions by calling this method
		clearSuggestions();
	});

	const handleInput = (e) => {
		// Update the keyword of the input element
		setValue(e.target.value);
	};

	const handleSelect = ({ description }) => () => {
		// When user selects a place, we can replace the keyword without request data from API
		// by setting the second parameter as "false"
		getLatLng(description).then((data) => {
			const place = { name: description, lat: data.lat, lng: data.lng };
			console.log(place);
			setValue(description, false);
			setFieldValue(field.name, place);
		});
		clearSuggestions();
	};

	const renderSuggestions = () => {
		return data.map((suggestion) => {
			const {
				id,
				structured_formatting: { main_text, secondary_text },
			} = suggestion;

			return (
				<li className='suggestions' key={id} onClick={handleSelect(suggestion)}>
					<strong>{main_text}</strong> <small>{secondary_text}</small>
				</li>
			);
		});
	};

	return (
		<div className='input-wrapper' ref={ref}>
			<p className='field-header'>{tag}</p>
			<i className='material-icons'>{icon}</i>
			<input
				className='input-outlined'
				value={value}
				onChange={handleInput}
				disabled={!ready}
			/>
			{/* We can use the "status" to decide whether we should display the dropdown or not */}
			{status === 'OK' && <ul className='listbox'>{renderSuggestions()}</ul>}
		</div>
	);
};

export default PlacesAutocomplete;
