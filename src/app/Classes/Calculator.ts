
import { AddCommand, SubCommand, DivCommand, MulCommand } from '../commands';
//Reciever
export class Calculator {

    current;
    history;

    constructor() {
        this.current = 0;
        this.history = [];
    }
    execute(command) {
        this.current = command.execute(command.value, this.current);
        this.history.push(command);
    }
    undo() {
        var command = this.history.pop();
        this.current = command.undo(this.current, command.value);
    }
    setCurrent(val) {
        this.current = Number(val)
    }
    getValue() {
        return this.current
    }
    reset() {
        this.current = 0;
        this.history = [];
    }

    SetCommandType(command, value): any {
        switch (command) {
            case 'add': return new AddCommand(value);
            case 'sub': return new SubCommand(value);
            case 'div': return new DivCommand(value);
            case 'mul': return new MulCommand(value);
        }
    }
}