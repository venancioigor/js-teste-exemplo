// primeiro teste
const { somar, subtrair } = require('./math')

let actual, expected

actual = somar(2, 2)
expected = 4

if (actual !== expected) {
    throw new Error(`${actual} é diferente de ${expected}`)
}

actual = subtrair(4, 2)
expected = 2

if (actual !== expected) {
    throw new Error(`${actual} é diferente de ${expected}`)
}
