import {ButtonData} from "./ButtonData";
import {ButtonTypes} from "@/shared";

export class NumberButton extends ButtonData {
    constructor(value) {
        super(ButtonTypes.Number, value);
    }
}