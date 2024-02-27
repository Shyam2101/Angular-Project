import { route } from './../add/add.module';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  num1: any =null;
  num2: any = null;
 result: number = 0;
user: any;
values='';

@Input('myName') name:any;







  constructor(private rout:Router) { }
  ngOnInit(): void {

  }

  sum() {
    this.result = parseInt(this.num1) + parseInt(this.num2);

  }

  sub() {
    this.result = parseInt(this.num1) - parseInt(this.num2);
  }

  mul() {
    this.result = parseInt(this.num1) * parseInt(this.num2);

  }
  div() {
    this.result = parseInt(this.num1) / parseInt(this.num2);

  }



  onkey(event: any) { // without type info
    console.log(event.key)
    if (typeof event.key === "string" ) {
      console.log('it is a string')
    }else{
      console.log('it is a number')
    }
  }

  exitButton(){

      this.rout.navigate([''])


    }

    goSub(){
    this.rout.navigate(['sub'])

    }

  }







