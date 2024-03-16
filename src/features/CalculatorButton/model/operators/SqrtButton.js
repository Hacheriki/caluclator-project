import {UnaryOperatorButton} from "../";

export class SqrtButton extends UnaryOperatorButton {
    constructor() {
        super("√", (a) => Math.sqrt(a));
    }
}