// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';
//
// xtest('renders learn react link', () => {
// 	const { getByText } = render(<App />);
// 	const linkElement = getByText(/learn react/i);
// 	expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// it('renders without crashing', () => {
//   shallow(<App />);
// });

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).toEqual(true);
	expect(wrapper).toContainReact(welcome);
});
