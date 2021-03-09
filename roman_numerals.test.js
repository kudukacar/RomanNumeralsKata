const { ArabicToRoman } = require('./roman_numerals');

describe("ArabicToRoman function", () => {
    test("it should convert the arabic numeral 1 to roman numeral I", () => {
        expect(ArabicToRoman(1)).toMatch("I")
    })
})
