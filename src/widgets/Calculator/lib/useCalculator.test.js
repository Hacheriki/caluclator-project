import { describe, it, expect, beforeEach } from 'vitest'
import { useCalculator } from './useCalculator'
import { ButtonTypes } from "../../../shared/types/ButtonType"

describe('useCalculator', () => {
    let calculator

    beforeEach(() => {
        calculator = useCalculator()
    })

    it('initializes with a single "0" NumberButton', () => {
        expect(calculator.currentCalculatorState.value).toHaveLength(1)
        expect(calculator.currentCalculatorState.value[0].value).toBe('0')
    })

    it('clears the calculator correctly', () => {
        calculator.onCalculatorAction({type: ButtonTypes.Number, value: '5'})
        calculator.onCalculatorAction({type: ButtonTypes.Clear})
        expect(calculator.currentCalculatorState.value).toHaveLength(1)
        expect(calculator.currentCalculatorState.value[0].value).toBe('0')
    })

    it('appends numbers correctly', () => {
        calculator.onCalculatorAction({type: ButtonTypes.Number, value: '1'})
        calculator.onCalculatorAction({type: ButtonTypes.Number, value: '2'})
        expect(calculator.currentCalculatorState.value[0].value).toBe('12')
    })

    it('applies unary operator correctly', () => {
        // Assuming there's a unary operator for squaring a number for simplicity
        calculator.onCalculatorAction({type: ButtonTypes.Number, value: '3'})
        calculator.onCalculatorAction({type: ButtonTypes.UnaryOperator, operation: (x) => x * x})
        expect(calculator.currentCalculatorState.value[0].value).toBe('9')
    })

    it('handles binary operator followed by numbers correctly', () => {
        calculator.onCalculatorAction({type: ButtonTypes.Number, value: '5'})
        calculator.onCalculatorAction({type: ButtonTypes.BinaryOperator, operation: (a, b) => a + b})
        calculator.onCalculatorAction({type: ButtonTypes.Number, value: '3'})
        calculator.onCalculatorAction({type: ButtonTypes.Equals})
        expect(calculator.currentCalculatorState.value[4].value).toBe(8)
    })

    it('calculates and displays result correctly after equals action', () => {
        calculator.onCalculatorAction({type: ButtonTypes.Number, value: '7'})
        calculator.onCalculatorAction({type: ButtonTypes.BinaryOperator, operation: (a, b) => a - b})
        calculator.onCalculatorAction({type: ButtonTypes.Number, value: '2'})
        calculator.onCalculatorAction({type: ButtonTypes.Equals})
        expect(calculator.currentCalculatorState.value[4].value).toBe(5)
    })

    it('correctly handles backspace action on numbers', () => {
        calculator.onCalculatorAction({type: ButtonTypes.Number, value: '123'})
        calculator.onCalculatorAction({type: ButtonTypes.Backspace})
        expect(calculator.currentCalculatorState.value[0].value).toBe('12')
    })

    it('does nothing on backspace if the current number is "0"', () => {
        calculator.onCalculatorAction({type: ButtonTypes.Clear})
        calculator.onCalculatorAction({type: ButtonTypes.Backspace})
        expect(calculator.currentCalculatorState.value[0].value).toBe('0')
    })

    it('correctly processes sequential binary operations', () => {
        calculator.onCalculatorAction({type: ButtonTypes.Number, value: '6'})
        calculator.onCalculatorAction({type: ButtonTypes.BinaryOperator, operation: (a, b) => a * b})
        calculator.onCalculatorAction({type: ButtonTypes.Number, value: '7'})
        calculator.onCalculatorAction({type: ButtonTypes.BinaryOperator, operation: (a, b) => a + b})
        calculator.onCalculatorAction({type: ButtonTypes.Number, value: '2'})
        calculator.onCalculatorAction({type: ButtonTypes.Equals})
        expect(calculator.currentCalculatorState.value[4].value).toBe(44) // 6*7 + 2
    })
})
