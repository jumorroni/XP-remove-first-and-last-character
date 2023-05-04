const { removeFirstAndLast } = require("../src/index")

test("should return 'sunday' when s is 'sunday'", () => {
    expect(removeFirstAndLast('sunday')).toBe('sunday')
});

test("should return 'onday' when s is 'monday'", () => {
    expect(removeFirstAndLast('monday')).toBe('onday')
});

test("should return 'uesda' when s is 'tuesday'", () => {
    expect(removeFirstAndLast('tuesday')).toBe('uesda')
});