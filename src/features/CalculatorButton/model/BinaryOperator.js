import {OperatorButton} from "./OperatorButton";
import {ButtonTypes} from "@/shared";

export class BinaryOperatorButton extends OperatorButton {

    constructor(value, operation) {
        super(ButtonTypes.BinaryOperator, value, operation);
    }

    static copy(model) {
        return new this(model.value,model.operation)
    }
}