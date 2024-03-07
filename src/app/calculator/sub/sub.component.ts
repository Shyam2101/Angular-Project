import { Component, Input,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})



export class SubComponent {

  staticNum:any=10;
  Total:any;


  @Input('globalName') item:any;   // for input

  @Input()
  set globalValue(val:any){      //setter in input
    if(val!=undefined && val!=null && val!=0){
    this.Total= val + this.staticNum
    this.sendTotal.emit(this.Total)
    }

  }

  @Output() sendData = new EventEmitter<any>();     //for output

  @Output() sendTotal = new EventEmitter<any>();

    addNewItem(value:string){
      this.sendData.emit(value);  // method for send data to parent
    }

  constructor(private route:Router){}

  go(){
    this.route.navigate(['edit'])
  }



  }




