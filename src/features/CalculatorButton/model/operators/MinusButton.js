import {BinaryOperatorButton} from "../";

export class MinusButton extends BinaryOperatorButton {
    constructor() {
        super("-", (a,b) => a - b);
    }
}