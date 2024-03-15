import {ButtonData} from "./ButtonData";
import {ButtonTypes} from "@/shared";

export class Backspace extends ButtonData {
    constructor() {
        super(ButtonTypes.Backspace, "");
    }
}