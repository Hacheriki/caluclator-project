import {BinaryOperatorButton} from "../";

export class PlusButton extends BinaryOperatorButton {
    constructor() {
        super("+", (a,b) => a + b);
    }
}