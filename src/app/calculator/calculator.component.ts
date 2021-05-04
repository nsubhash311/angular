import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public num1!: number;
  public num2!: number;
  public result!: number;

  sum(){
    return this.result=this.num1 + this.num2;
  }
  sub(){
    return this.result=this.num1 - this.num2;
  }
  mul(){
    return this.result=this.num1 * this.num2;
  }
  div(){
    return this.result=this.num1 / this.num2;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
