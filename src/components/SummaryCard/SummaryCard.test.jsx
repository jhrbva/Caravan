import React from 'react';
import { shallow } from 'enzyme';
import SummaryCard from './SummaryCard';

describe('SummaryCard', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(<SummaryCard />);
		expect(wrapper).toMatchSnapshot();
	});
});
describe('handleShohw', () => {
	it('sets show to true', () => {
		const wrapper = shallow(<SummaryCard />);
		const instance = wrapper.instance();
		expect(instance.state.show).toBeFalsy();
		instance.handleShow();
		expect(instance.state.show).toBeTruthy();
	});
});
describe('handleClose', () => {
	it('sets show to false', () => {
		const wrapper = shallow(<SummaryCard />);
		const instance = wrapper.instance();
		wrapper.setState({ show: true });
		instance.handleClose();
		expect(instance.state.show).toBeFalsy();
	});
});
