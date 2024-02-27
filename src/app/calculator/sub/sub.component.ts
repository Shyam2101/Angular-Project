import { Component, Input,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent {

  @Input() item='';
  @Output() newItemEvent = new EventEmitter<any>();
newItem: any;

    addNewItem(value:string){
      this.newItemEvent.emit(value);
    }

  constructor(private route:Router){}

  go(){
    this.route.navigate(['edit'])
  }



  }




