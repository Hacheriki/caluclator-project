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
        new model.PowerButton(),
        new model.NumberButton("7"),
        new model.NumberButton("8"),
        new model.NumberButton("9"),
        new model.UnaryOperatorButton("*", () => console.log("product")),
    ],
    [
        new model.SqrtButton(),
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
        new model.SignButton(),
        new model.NumberButton("0"),
        new model.NumberButton("."),
        new model.EqualsButton()
    ]
]