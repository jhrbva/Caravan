import React from 'react';
import { shallow } from 'enzyme';
import TripRestStops from './TripRestStops';

describe('TripRestStops', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(<TripRestStops />);
		expect(wrapper).toMatchSnapshot();
	});
	it('should have one field', () => {
		const wrapper = shallow(<TripRestStops />);
		const fieldWrapper = wrapper.find('Field');
		expect(fieldWrapper.length).toBe(1);
	});
	it('should have one field', () => {
		const wrapper = shallow(<TripRestStops />);
		const fieldWrapper = wrapper.find('Field');
		const restStopField = fieldWrapper.find({ name: 'rest_stops' });
		expect(restStopField.length).toBe(1);
	});
});
