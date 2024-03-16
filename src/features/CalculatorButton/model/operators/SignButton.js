import {UnaryOperatorButton} from "../";

export class SignButton extends UnaryOperatorButton {
    constructor() {
        super("+/-", (a) => -a);
        this.style = "background: rgba(255, 255, 255, 0.15);"
    }
}