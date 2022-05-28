//4.js
const { somar, subtrair } = require('./math')

let result, expected

test('somar', () => {
    result = somar(2, 2)
    expected = 4

    expect(result).toBe(expected)
})

test('subtrair', () => {
    result = subtrair(4, 2)
    expected = 1

    expect(result).toBe(expected)
})



function test(nomeFuncao, callback) {
    try {
        callback()
        console.log(`✓ - A função ${nomeFuncao} passou no teste!`)
    } catch (error) {
        console.log(`X - A função ${nomeFuncao} não passou no teste!`)
        console.log(error)
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} é diferente de ${expected}!`)
            }
        }
    }
}

















