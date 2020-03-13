import React from 'react';
import { shallow } from 'enzyme';
import { SignupForm, Signup } from './Signup';

describe('Signup', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(<Signup />);
		expect(wrapper).toMatchSnapshot();
	});
});

describe('SignupForm', () => {
	it('should have five fields', () => {
		const wrapper = shallow(<SignupForm />);
		const fieldWrapper = wrapper.find('Field');
		expect(fieldWrapper.length).toBe(6);
	});
	it('should have an first name field', () => {
		const wrapper = shallow(<SignupForm />);
		const fieldWrapper = wrapper.find('Field');
		const firstNameField = fieldWrapper.find({ name: 'firstname' });
		expect(firstNameField.length).toBe(1);
	});
	it('should have an last name field', () => {
		const wrapper = shallow(<SignupForm />);
		const fieldWrapper = wrapper.find('Field');
		const lastNameField = fieldWrapper.find({ name: 'lastname' });
		expect(lastNameField.length).toBe(1);
	});
	it('should have an username field', () => {
		const wrapper = shallow(<SignupForm />);
		const fieldWrapper = wrapper.find('Field');
		const usernameField = fieldWrapper.find({ name: 'username' });
		expect(usernameField.length).toBe(1);
	});
	it('should have an phone field', () => {
		const wrapper = shallow(<SignupForm />);
		const fieldWrapper = wrapper.find('Field');
		const phoneField = fieldWrapper.find({ name: 'phone' });
		expect(phoneField.length).toBe(1);
	});
	it('should have an email field', () => {
		const wrapper = shallow(<SignupForm />);
		const fieldWrapper = wrapper.find('Field');
		const emailField = fieldWrapper.find({ name: 'email' });
		expect(emailField.length).toBe(1);
	});
	it('should have a password field', () => {
		const wrapper = shallow(<SignupForm />);
		const fieldWrapper = wrapper.find('Field');
		const passwordField = fieldWrapper.find({ name: 'password' });
		expect(passwordField.length).toBe(1);
	});
});
