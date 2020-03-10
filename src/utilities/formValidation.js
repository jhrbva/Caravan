const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const phoneRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
const passwordRegex = /^\s*(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

// Error Messages
export const requiredError = 'Required';
export const invalidEmail = 'Invalid email address';
export const invalidPhone = 'Invalid phone number';
export const invalidPasswordLength = 'Password must be least 8 characters long';
export const invalidPasswordStrength =
	'Password must contain at least 1 lower case letter, 1 upper case letter, and 1 number';

// Validation Functions
export const required = value => {
	let error;
	if (!value) error = requiredError;
	return error;
};

export const validateEmail = value => {
	let error;
	if ((error = required(value)));
	else if (!emailRegex.test(value)) error = invalidEmail;
	return error;
};

export const validatePhone = value => {
	let error;
	if ((error = required(value)));
	else if (!phoneRegex.test(value)) error = invalidPhone;
	return error;
};

export const validatePasswordLength = value => {
	console.log('validatePasswordLength being run');
	let error;
	if ((error = required(value)));
	else if (value.length < 8) error = invalidPasswordLength;
	return error;
};

export const validatePasswordStrength = value => {
	console.log('validatePasswordStrength being run');
	let error;
	if ((error = required(value)));
	else if (!passwordRegex.test(value)) error = invalidPasswordStrength;
	return error;
};

export const validatePassword = value => {
	let error;
	if ((error = validatePasswordLength(value)));
	else if ((error = validatePasswordStrength(value)));
	return error;
};
