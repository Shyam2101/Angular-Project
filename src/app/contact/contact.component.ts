import { Component } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {


  constructor(private loc: Location) {
  }
  ngOnInit(){

  }

  onClick(){

    this.loc.back();
  }


}


