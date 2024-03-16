import {BinaryOperatorButton} from "../";

export class ProductButton extends BinaryOperatorButton {
    constructor() {
        super("⨯", (a,b) => a * b);
    }
}