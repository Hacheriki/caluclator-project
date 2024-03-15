import {ButtonData} from "./ButtonData";

export class OperatorButton extends ButtonData {
    constructor(type, value, operation) {
        super(type, value, "background: rgba(255, 255, 255, 0.08);");
        this.operation = operation
    }
}