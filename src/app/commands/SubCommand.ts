import { Command } from "./Command";
import { add, sub } from "../Functions/Calculate";

export class SubCommand extends Command {
    constructor (value) {
      super(sub, add, value)
    }
  }