const actual = true
const expected = false

if (actual !== expected) {
    throw new Error(`O resultado: ${actual} é diferente do resultado esperado: ${expected}`)
}