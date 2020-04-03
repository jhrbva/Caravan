import React from 'react';
import { shallow } from 'enzyme';
import TripInformation from './TripInformation';

describe('TripInformation', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(<TripInformation />);
		expect(wrapper).toMatchSnapshot();
	});
	it('should have four fields', () => {
		const wrapper = shallow(<TripInformation />);
		const fieldWrapper = wrapper.find('Field');
		expect(fieldWrapper.length).toBe(6);
	});
	it('should have an start_location field', () => {
		const wrapper = shallow(<TripInformation />);
		const fieldWrapper = wrapper.find('Field');
		const usernameField = fieldWrapper.find({ name: 'start_location' });
		expect(usernameField.length).toBe(1);
	});
	it('should have a destination field', () => {
		const wrapper = shallow(<TripInformation />);
		const fieldWrapper = wrapper.find('Field');
		const usernameField = fieldWrapper.find({ name: 'destination' });
		expect(usernameField.length).toBe(1);
	});
	it('should have an start_date field', () => {
		const wrapper = shallow(<TripInformation />);
		const fieldWrapper = wrapper.find('Field');
		const usernameField = fieldWrapper.find({ name: 'start_date' });
		expect(usernameField.length).toBe(1);
	});
	it('should have a start_time field', () => {
		const wrapper = shallow(<TripInformation />);
		const fieldWrapper = wrapper.find('Field');
		const usernameField = fieldWrapper.find({ name: 'start_time' });
		expect(usernameField.length).toBe(1);
	});
});
