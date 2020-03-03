import React from 'react';
import { shallow } from 'enzyme';
import TripGuests from './TripForm';

describe('TripGuests', () => {
    it('should match the snapshot', () => {
        const wrapper = shallow(<TripGuests />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should have one field', () => {
        const wrapper = shallow(<TripGuests />);
        const fieldWrapper = wrapper.find('Field');
        expect(fieldWrapper.length).toBe(1);
    });
    it('should have an guests field', () => {
        const wrapper = shallow(<TripGuests />);
        const fieldWrapper = wrapper.find('Field');
        const usernameField = fieldWrapper.find({ name: 'guests' });
        expect(usernameField.length).toBe(1);
    });
});
