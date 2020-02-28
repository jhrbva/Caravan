import {
	validateEmail,
	validatePhone,
	requiredError,
	invalidEmail,
	invalidPhone,
} from "./formValidation";

describe("validateEmail", () => {
	it("should return correct error for empty values", () => {
		expect(validateEmail("")).toBe(requiredError);
	});

	it("should return correct error for values without @", () => {
		expect(validateEmail("yaAtyahoo.com")).toBe(invalidEmail);
	});

	it("should return correct error for values without a .ext", () => {
		expect(validateEmail("ya@yahoo")).toBe(invalidEmail);
	});

	it("should return undefined for emails with an @ and .ext", () => {
		expect(validateEmail("ya@yahoo.com")).toBe(undefined);
	});
});

describe("validatePhone", () => {
	it("should return correct error for empty values", () => {
		expect(validateEmail("")).toBe(requiredError);
	});

	it("should return false for values with alphabetical characters", () => {
		expect(validatePhone("123a456b784")).toBe(invalidPhone);
	});

	it("should return false for values less than 10 numerical characters", () => {
		expect(validatePhone("1234")).toBe(invalidPhone);
	});

	it("should return true for phone number with dashes", () => {
		expect(validatePhone("123-456-7890")).toBe(undefined);
	});

	it("should return true for phone number with parentheses and dashes", () => {
		expect(validatePhone("(123)4567890")).toBe(undefined);
	});

	it("should return true for phone number with parentheses and dashes", () => {
		expect(validatePhone("(123)-456-7890")).toBe(undefined);
	});

	it("should return true for phone number with country code", () => {
		expect(validatePhone("+1 (123)-456-7890")).toBe(undefined);
	});
});
