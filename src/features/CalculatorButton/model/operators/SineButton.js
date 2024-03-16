import {UnaryOperatorButton} from "../";

export class SineButton extends UnaryOperatorButton {
    constructor() {
        super("sin", (a) => Math.sin(a));
    }
}