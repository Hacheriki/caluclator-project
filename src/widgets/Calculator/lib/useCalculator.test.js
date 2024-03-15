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
        // Simulate some actions here to change the state
        calculator.onCalculatorAction({type: ButtonTypes.Number, value: '5'})
        calculator.onCalculatorAction({type: ButtonTypes.Clear})
        expect(calculator.currentCalculatorState.value).toHaveLength(1)
        expect(calculator.currentCalculatorState.value[0].value).toBe('0')
    })

    // Continue with tests for Number Button Presses, Unary Operator, Binary Operator, Equals Action, and Backspace Action...
    // Example for Number Button Presses:
    it('appends numbers correctly', () => {
        calculator.onCalculatorAction({type: ButtonTypes.Number, value: '1'})
        calculator.onCalculatorAction({type: ButtonTypes.Number, value: '2'})
        expect(calculator.currentCalculatorState.value[0].value).toBe('12')
    })
})