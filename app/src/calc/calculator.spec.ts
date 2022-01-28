import { sum, muiltiply } from './calculator'
import { expect } from 'chai'

describe('CAlculator test', function () {
    describe('Summation', function () {
        it('testing the sum case 1', function () {
            const sumValue = sum(2, 3)
            expect(sumValue).to.equal(5)
        })
    })

    describe('Multiplier', function () {
        it('testing the Multiplication case 1', function () {
            const mul = muiltiply(2, 3)
            expect(mul).to.equal(6)

        })
    })
})
