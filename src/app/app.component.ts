import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Calculator } from './Classes/Calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Calculator';

  calculator: Calculator;
  need_reset: boolean;
  CURRENT_COMMAND: any;
  CURRENT_COMMAND_VALUE: string;


  @ViewChild("formula") Formula: ElementRef<HTMLDivElement>;
  @ViewChild("display") Display: ElementRef<HTMLDivElement>;

  constructor() {
  }

  ngOnInit(): void {
    this.calculator = new Calculator();
    this.need_reset = false;
  }



  Operation(command, value) {
    this.CURRENT_COMMAND = this.calculator.SetCommandType(command, this.Display.nativeElement.innerText);
    this.CURRENT_COMMAND_VALUE = value;
    this.Formula.nativeElement.innerText = this.Display.nativeElement.innerText + ' ' + value + ' '
    this.Display.nativeElement.innerText = "0";
  }

  Number(value: string) {
    if (this.need_reset)
      this.Reset();

    this.Formula.nativeElement.innerText += value;
    if (this.Display.nativeElement.innerText == '0')
      this.Display.nativeElement.innerText = value;
    else
      this.Display.nativeElement.innerText += value;
    this.calculator.setCurrent(this.Display.nativeElement.innerText);
  }

  //Undo
  Undo() {
    this.calculator.undo();
    this.Display.nativeElement.innerText = this.calculator.getValue();
    this.Formula.nativeElement.innerText = "";
  }
  //RESET
  Reset() {
    this.calculator.reset();
    this.Display.nativeElement.innerText = "0";
    this.Formula.nativeElement.innerText = "";
    this.need_reset = false;
  }
  //Equals
  equals() {
    if (this.need_reset)
      this.Reset();

    this.calculator.execute(this.CURRENT_COMMAND);
    this.Formula.nativeElement.innerText += ' = ' + this.calculator.getValue();
    this.Display.nativeElement.innerText = this.calculator.getValue();
    this.need_reset = true;
  }
}
