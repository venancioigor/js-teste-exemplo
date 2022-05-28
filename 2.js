const assert = require('assert')
const { somar, subtrair } = require('./math')

let actual, expected

actual = somar(3, 7)
expected = 10

assert.strictEqual(actual, expected)

actual = subtrair(4, 2)
expected = 1

assert.strictEqual(actual, expected)
