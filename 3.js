//3.js

const { somar, subtrair } = require('./math')

let result, expected

result = somar(2, 2)
expected = 5

expect(result).toBe(expected)

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} é diferente de ${expected}`)
            }
        }
    }
}