import {UnaryOperatorButton} from "../";

export class FloorButton extends UnaryOperatorButton {
    constructor() {
        super("floor", (a) => Math.floor(a));
    }
}