import { Command } from "./Command";
import { mul, div } from "../Functions/Calculate";

export
    class MulCommand extends Command {
    constructor(value) {
        super(mul, div, value)
    }
}