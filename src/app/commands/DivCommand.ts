import { Command } from "./Command";
import { mul, div } from "../Functions/Calculate";


export class DivCommand extends Command {
    constructor(value) {
        super(div, mul, value)
    }
}