import React from 'react';
import { shallow } from 'enzyme';
// import { renderHook, act } from '@testing-library/react-hooks';

import SummaryCard from './SummaryCard';

const trip = {
	trip_title: 'Wonders of the Canyon',
	tripdate: '2020-06-01T13:55:06.000Z',
	trip_description: 'Join in as we travel to the Grand Canyon',
	startlocation: '123 OneTreeHill St.',
	destination: 'Grand Canyon, Grand Canyon Ave.',
};

const host = {
	username: 'conniecode',
};
const members = [{
	username: 'jcode'
}];

const reststops = [{ location: 'Wawa' }, { location: 'Loves' }];

describe('SummaryCard', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(<SummaryCard trip={trip} host={host} members={members} reststops={reststops}/>);
		expect(wrapper).toMatchSnapshot();
	});
});

// TODO: Test React Hooks for handleShow & handleClose using react-hook testing library.
