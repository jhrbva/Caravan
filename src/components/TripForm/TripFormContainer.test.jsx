import React from 'react';
import { shallow } from 'enzyme';
import { TripFormContainer } from './TripFormContainer';

describe('NextPage()', () => {
	it('changes pages from 1 to 2 then 3', () => {
		const wrapper = shallow(<TripFormContainer children={[1, 2, 3]} />);
		const instance = wrapper.instance();
		expect(instance.state.page).toBe(0);
		instance.nextPage({ preventDefault: jest.fn() });
		expect(instance.state.page).toBe(1);
		instance.nextPage({ preventDefault: jest.fn() });
		expect(instance.state.page).toBe(2);
	});
});
describe('PreviousPage()', () => {
	it('changes pages from 3 to 2 then 1', () => {
		const wrapper = shallow(<TripFormContainer />);
		const instance = wrapper.instance();
		wrapper.setState({ page: 3 });
		instance.previousPage({ preventDefault: jest.fn() });
		expect(instance.state.page).toBe(2);
		instance.previousPage({ preventDefault: jest.fn() });
		expect(instance.state.page).toBe(1);
	});
});
