//5.js
const { somar, subtrair } = require('./math')
let result, expected

test('somar', () => {
    result = somar(2, 2)
    expected = 4

    expect(result).toBe(expected)
})

test('subtrair', () => {
    result = subtrair(2, 2)
    expected = 0

    expect(result).toBe(expected)
})