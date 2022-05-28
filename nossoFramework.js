function test(nomeFuncao, callback) {
    try {
        callback()
        console.log('\u001b[1;32m' + `✓ - A função ${nomeFuncao} passou no teste!` + '\u001b[0m')
    } catch (error) {
        console.log("\u001b[1;31m" + `X - A função ${nomeFuncao} não passou no teste!` + '\u001b[0m')

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

module.exports = { test, expect }