const createMultiplicationTable = require('../main');

it ('To test the table output match', () => {
	let expected = "2*2=4\n"+"2*3=6  3*3=9\n"+"2*4=8  3*4=12 4*4=16";
	expect(createMultiplicationTable(2,4)).toBe(expected);
});

it ('To test start num greater than end num', () => {
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

it ('To test output with large inputs', () => {
	let expected = null;
   expect(createMultiplicationTable(95,100)).toBe("95*95=9025\n"+
   "95*96=9120    96*96=9216\n"+
   "95*97=9215    96*97=9312    97*97=9409\n"+
   "95*98=9310    96*98=9408    97*98=9506    98*98=9604\n"+
   "95*99=9405    96*99=9504    97*99=9603    98*99=9702    99*99=9801\n"+
   "95*100=9500   96*100=9600   97*100=9700   98*100=9800   99*100=9900   100*100=10000");
});