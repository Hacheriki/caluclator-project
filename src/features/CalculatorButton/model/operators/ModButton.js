import {BinaryOperatorButton} from "../";

export class ModButton extends BinaryOperatorButton {
    constructor() {
        super("mod", (a,b) => a % b);
    }
}