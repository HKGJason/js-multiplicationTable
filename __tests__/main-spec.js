const createMultiplicationTable = require('../main');

it ('To test the table output match', () => {
	let expected = "2*2=4\n"+"2*3=6  3*3=9\n"+"2*4=8  3*4=12  4*4=16";
	expect(createMultiplicationTable(2,4)).toBe(expected);
});

it ('To test start num less than end num', () => {
	let expected = null;
	expect(createMultiplicationTable(2,1)).toBe(expected);
});

it ('To test start num less than 1', () => {
	let expected = null;
	expect(createMultiplicationTable(0,1)).toBe(expected);
});

it ('To test start num greater than 1000', () => {
	let expected = null;
	expect(createMultiplicationTable(1001,1)).toBe(expected);
});
it ('To test end num greater than 1001', () => {
	let expected = null;
	expect(createMultiplicationTable(2,1001)).toBe(expected);
});
it ('To test end num less than 1', () => {
	let expected = null;
	expect(createMultiplicationTable(2,0)).toBe(expected);
});