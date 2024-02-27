import { route } from './../add.module';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  urlId: any;
  getid: any;

  getArray: any = [];

  arr2: any = [];

  firstname: any;
  lastname: any;
  age: any;

  constructor(private route: ActivatedRoute, private nav:Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);

      this.urlId = params['id'];
      console.log('url Id:', this.urlId);
      if (this.urlId != 0)
      {
        this.getLocalId();
      }
    });
  }

  getLocalId() {
    this.getArray = localStorage.getItem('edit');//get item from local storage
    if (this.getArray) {
      this.getArray = JSON.parse(this.getArray);  //

      this.getArray.forEach((element: any) => {
        if (element.firstname == this.urlId)      // if element firstname = url id execute the condition
         {
          this.arr2 = element;
          this.firstname = element.firstname;
          this.lastname = element.lastname;
          this.age = element.age;
          console.log(this.arr2);
        }
      });
    }
  }

  onSave(){
    console.log(this.getArray)

   this.getArray.forEach((Element:any) => {
    if(Element.firstname == this.urlId)
    {
      Element=this.arr2;
      Element.firstname=this.firstname;
      Element.lastname=this.lastname;
      Element.age=this.age;
      console.log(this.getArray)
    }
   });

   localStorage.setItem('edited',JSON.stringify(this.getArray));
   this.nav.navigate(['edit'])

  }
}
