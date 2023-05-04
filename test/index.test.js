const { removeFirstAndLast } = require("../src/index")

// test("should return 'sunday' when s is 'sunday'", () => {
//     expect(removeFirstAndLast('sunday')).toBe('sunday')
// });

test("should return 'unday' when s is 'sunday'", () => {
    expect(removeFirstAndLast('sunday')).toBe('unday')
});