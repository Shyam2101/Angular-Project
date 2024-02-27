import { Component, Input, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent {


result: any;
name="shyam";
  constructor(private route:Router){}

  go(){
    this.route.navigate(['edit'])
  }



}
