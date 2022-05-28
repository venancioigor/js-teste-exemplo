const { somar, subtrair } = require('./math')
const { test, expect } = require('./nossoFramework')

let result, expected

test('somar', () => {
    result = somar(2, 2)
    expected = 4

    expect(result).toBe(expected)
})

test('subtrair', () => {
    result = subtrair(2, 2)
    expected = 1

    expect(result).toBe(expected)
})