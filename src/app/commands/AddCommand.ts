import { Command } from "./Command";
import { add, sub } from "../Functions/Calculate";

export class AddCommand extends Command {
    constructor(value) {
        super(add, sub, value)
    }
}