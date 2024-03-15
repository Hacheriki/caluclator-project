import {UnaryOperatorButton} from "../";

export class CeilButton extends UnaryOperatorButton {
    constructor() {
        super("ceil", (a) => Math.ceil(a));
    }
}