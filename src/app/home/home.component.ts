
import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  firstName: any;
lastName: any;
age: any;
index:any;
find:any;
myArray:Array<any>=[];
arr1:Array<any>=[5,3,7,9,1,2]
findArray:Array<any>=[];
  temp: any;
  constructor(){
    var temp=this.arr1[0]; // declare array index 0 as starting value to temp
    for(var i=0;i<=this.arr1.length;i++){  // for increment 
      
      
      if(temp<this.arr1[i]){ 
        temp=this.arr1[i];
        
      }
      
     

      }
      
      console.log(temp);

  }

  push() {
      var temp={
        firstname:this.firstName,
        lastname:this.lastName,
        age:this.age
      }   
      this.myArray.push(temp);
      console.log(this.myArray);
      this.firstName="";
      this.lastName="";
      this.age="";
      

  }

  onDelete(){
   
    
    

    console.log(this.index);
    this.myArray=this.myArray.splice(0,this.index);

  }


  onSubmit(){
    

    var index=this.myArray.findIndex(a=>a.firstname==this.find);  //return index value
    console.log(index);
    if(index!= -1){
      console.log(this.find);
      this.findArray=this.myArray.find(a=>a.firstname==this.find); // return object

    }
    else{
      alert('NOT FOUND');
    }




    // console.log(this.find);
    // this.findArray=this.myArray.find(a=>a.firstname==this.find);


  }


  

  

}
