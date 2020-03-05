import React from 'react';
import { shallow } from 'enzyme';
import TripForm from './TripForm';

describe('TripForm', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(<TripForm />);
		expect(wrapper).toMatchSnapshot();
	});
});
describe('NextPage()', () => {
	it('changes pages from 1 to 2 then 3', () => {
		const wrapper = shallow(<TripForm />);
		const instance = wrapper.instance();
		expect(instance.state.page).toBe(1);
		instance.nextPage({ preventDefault: jest.fn() });
		expect(instance.state.page).toBe(2);
		instance.nextPage({ preventDefault: jest.fn() });
		expect(instance.state.page).toBe(3);
	});
});
describe('PreviousPage()', () => {
	it('changes pages from 3 to 2 then 1', () => {
		const wrapper = shallow(<TripForm />);
		const instance = wrapper.instance();
		wrapper.setState({ page: 3 });
		instance.previousPage({ preventDefault: jest.fn() });
		expect(instance.state.page).toBe(2);
		instance.previousPage({ preventDefault: jest.fn() });
		expect(instance.state.page).toBe(1);
	});
});