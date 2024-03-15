import {BinaryOperatorButton} from "../";

export class DivideButton extends BinaryOperatorButton {
    constructor() {
        super("/", (a,b) => a / b);
    }
}