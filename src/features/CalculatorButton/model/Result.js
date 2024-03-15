import {ButtonData} from "./ButtonData";
import {ButtonTypes} from "@/shared";

export class Result extends ButtonData {
    constructor(value) {
        super(ButtonTypes.Result, value);
    }
}