import {ButtonData} from "./ButtonData";
import {ButtonTypes} from "@/shared";

export class ClearButton extends ButtonData {
    constructor() {
        super(ButtonTypes.Clear, "C", "background: rgba(255, 255, 255, 0.08);");
    }
}
