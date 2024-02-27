import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  username:any;
  getEdited:any=[];

  arr1:any=[

    {
      'firstname':'shyam',
      'lastname':'sundhar',
      'age':'21',
    },
    {
      'firstname':'guna',
      'lastname':'sekaran',
      'age':'25',
    },
    {
      'firstname':'vinoth',
      'lastname':'kumar',
      'age':'25',
    },
    {
      'firstname':'santhosh',
      'lastname':'gandhi',
      'age':'23',
    }
  ]

  constructor(private route:Router){}


  ngOnInit(): void{

   this.username =localStorage.getItem('credentials');
   this.username=JSON.parse(this.username);
   console.log(this.username);

  }


  onClick(){
    this.route.navigate(['calc'])

  }

  onContact(){
    this.route.navigate(['contact'])
  }
  onHome(){
    this.route.navigate(['home'])
  }



  onLogout(){
    localStorage.clear();
    this.route.navigate([''])
  }

  onEdit(receive:any){
    this.route.navigate(['edit/'+receive]);
   localStorage.setItem('edit',JSON.stringify(this.arr1))
  }


  onShow(){
    this.getEdited=localStorage.getItem('edited')
    console.log(this.getEdited);

    if(this.getEdited){
      this.getEdited=JSON.parse(this.getEdited)

      console.log(this.getEdited);

      this.arr1=this.getEdited;


    }
  }


  onDelete(firstname:any){
    var index=this.arr1.findIndex((a: { firstname: any; })=>a.firstname==firstname)
    console.log(index);

  this.arr1.splice(index,1);

  }
}


