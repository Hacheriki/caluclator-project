import {UnaryOperatorButton} from "../";

export class CosineButton extends UnaryOperatorButton {
    constructor() {
        super("cos", (a) => Math.cos(a));
    }
}