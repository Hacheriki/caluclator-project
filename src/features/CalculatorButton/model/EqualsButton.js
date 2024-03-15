import {ButtonData} from "./ButtonData";
import {ButtonTypes} from "@/shared";

export class EqualsButton extends ButtonData {
    constructor() {
        super(ButtonTypes.Equals, "=", "background: rgba(75, 255, 255, 0.65);");
    }
}