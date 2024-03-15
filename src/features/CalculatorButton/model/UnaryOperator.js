import {OperatorButton} from "./OperatorButton";
import {ButtonTypes} from "@/shared";

export class UnaryOperatorButton extends OperatorButton {

    constructor(value, operation) {
        console.log(1)
        super(ButtonTypes.UnaryOperator, value, operation);
    }
}