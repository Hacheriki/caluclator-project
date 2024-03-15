import * as model from '@/features/CalculatorButton'
export const calculatorModel = [
    [
        new model.ModButton(),
        new model.FloorButton(),
        new model.CeilButton(),
        new model.ClearButton(),
        new model.DivideButton(),
    ],
    [
        new model.UnaryOperatorButton("^", () => console.log("power")),
        new model.NumberButton("7"),
        new model.NumberButton("8"),
        new model.NumberButton("9"),
        new model.UnaryOperatorButton("*", () => console.log("product")),
    ],
    [
        new model.UnaryOperatorButton("sqrt", () => console.log("sqrt")),
        new model.NumberButton("4"),
        new model.NumberButton("5"),
        new model.NumberButton("6"),
        new model.MinusButton(),
    ],
    [
        new model.CosineButton(),
        new model.NumberButton("1"),
        new model.NumberButton("2"),
        new model.NumberButton("3"),
        new model.PlusButton(),
    ],
    [
        new model.UnaryOperatorButton("sin", () => console.log("sine")),
        new model.UnaryOperatorButton("+/-", () => console.log("sign")),
        new model.NumberButton("0"),
        new model.NumberButton("."),
        new model.EqualsButton()
    ]
]