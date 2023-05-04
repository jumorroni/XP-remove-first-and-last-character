const { removeFirstAndLast } = require("../src/index")

// test("should return true when there is a function", () => {
//     expect(removeFirstAndLast()).toBe(true)
// });

test("should return 'sunday' when s is 'sunday'", () => {
    expect(removeFirstAndLast('sunday')).toBe('sunday')
});