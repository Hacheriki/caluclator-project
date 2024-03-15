import {BinaryOperatorButton} from "../";

export class PowerButton extends BinaryOperatorButton {
    constructor() {
        super("^", (a,b) => a ** b);
    }
}