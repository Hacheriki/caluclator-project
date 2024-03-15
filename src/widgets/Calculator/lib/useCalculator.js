import {ref} from "vue";
import {BinaryOperatorButton, EqualsButton, NumberButton, Result} from "@/features";
import {ButtonTypes} from "@/shared";

export const useCalculator = () => {
    let currentCalculatorState = ref([])
    clearCalculator()
    function clearCalculator() {
        currentCalculatorState.value = [new NumberButton("0")]
    }

    function isOperator(lastAction) {
        return lastAction.operation != null;
    }

    function isNumberButton(lastAction) {
        return lastAction.type === ButtonTypes.Number
    }

    function onNumberAction(lastAction, actionModel) {
        if (isOperator(lastAction)) {
            currentCalculatorState.value.push(new NumberButton(actionModel.value))
            return
        }
        if (lastAction.value === "0" && actionModel.value !== ".") {
            lastAction.value = actionModel.value
            return
        }

        lastAction.value += actionModel.value
    }

    function onUnaryOperatorAction(lastAction, actionModel) {
        const firstValue = +currentCalculatorState.value[0].value

        const result = actionModel.operation(firstValue)
        currentCalculatorState.value = [new NumberButton(String(result))]
    }

    function onBinaryOperatorAction(lastAction,actionModel) {
        if (isOperator(lastAction)) {
            currentCalculatorState.value.pop()
        }

        currentCalculatorState.value.push(BinaryOperatorButton.copy(actionModel))
    }

    function performBinaryOperation() {
        const firstValue = +currentCalculatorState.value[0].value
        const operation = currentCalculatorState.value[1].operation
        const secondValue = +currentCalculatorState.value[2].value

        return operation(firstValue,secondValue)
    }
    function performBinaryOperationAndContinue() {
        const result = performBinaryOperation()
        currentCalculatorState.value = [new NumberButton(String(result))]
    }

    function onEqualsAction() {
        let result = +currentCalculatorState.value[0].value

        if (currentCalculatorState.value.length === 2) {
            currentCalculatorState.value.pop()
        }

        if (currentCalculatorState.value.length === 3) {
            result = performBinaryOperation()
        }

        currentCalculatorState.value.push(new EqualsButton(), new Result(result))
    }

    function onBackspace(lastAction) {
        if (lastAction.value === "0" || !isNumberButton(lastAction)) {
            return
        }

        let newValue = lastAction.value.slice(0,-1)
        if (newValue === "") {
            newValue = "0"
        }
        lastAction.value = newValue
    }

    function onCalculatorAction(actionModel) {
        let lastAction = currentCalculatorState.value[currentCalculatorState.value.length - 1]

        if (lastAction.type === ButtonTypes.Result) clearCalculator()
        lastAction = currentCalculatorState.value[currentCalculatorState.value.length - 1] // CRINGE

        switch (actionModel.type) {
            case ButtonTypes.Clear: {
                clearCalculator()
                break
            }
            case ButtonTypes.Number: {
                onNumberAction(lastAction, actionModel)
                break
            }
            case ButtonTypes.UnaryOperator: {
                if (currentCalculatorState.value.length === 3) performBinaryOperationAndContinue()
                onUnaryOperatorAction(lastAction, actionModel)
                break
            }
            case ButtonTypes.BinaryOperator: {
                if (currentCalculatorState.value.length === 3) performBinaryOperationAndContinue()
                onBinaryOperatorAction(lastAction,actionModel)
                break
            }
            case ButtonTypes.Equals: {
                onEqualsAction()
                break
            }

            case ButtonTypes.Backspace: {
                onBackspace(lastAction)
                break
            }
        }
    }

    return {
        currentCalculatorState,
        onCalculatorAction
    }
}