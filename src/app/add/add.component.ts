import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [LoginService]
})
export class AddComponent {
  username:any;
  getEdited:any=[];
  error=null;

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

  arr2: any;  //for API table


show: any;            // for toggle button
buttonName:any="show" // for toggle button

isLoading:boolean=false;

ifShow:boolean=false;
  iffShow: boolean=false;







  constructor(private route:Router, private apiService:LoginService){     // to call API service



  }



  addForm!: FormGroup ;

  ngOnInit(): void{

   this.username =localStorage.getItem('credentials');  //get item from local storge
   this.username=JSON.parse(this.username);
   console.log(this.username);



   this.addForm= new FormGroup({  //setting form group and form group controls
    'ID': new FormControl(''),
    'NAME': new FormControl('',[Validators.required]),   //to validate form
    'EMAIL': new FormControl('',[Validators.required]),  //to validate form
    'OTP': new FormControl('')
   })


  }


  apiTable(){
    this.getAllUser();
  }



  onClick(){
    var touch =this.addForm.touched  // trigger if form is touched
    console.log(touch);
    var dirty =this.addForm.dirty    // triggers if form is being edited and wrongly exit or cancel
    console.log(dirty);
    if(dirty==true){
      alert('You have unsaved changes')
    }
    else{
      this.route.navigate(['calc'])
    }




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



  toggle(){

    this.show = !this.show;

    // Change the name of the button.
    if(this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";

  }




  onEdit(receive:any){
    this.route.navigate(['edit/'+receive]);
   localStorage.setItem('edit',JSON.stringify(this.arr1))  // to set item in local storage
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





logOut(){
  localStorage.clear();
  this.route.navigate([''])
}



getAllUser(){ //for API call
  this.isLoading=true;
  this.apiService.getUser().subscribe((get:any)=>{
    this.isLoading=false;
    console.log(get);
    if(get.httpStatus == 200)
    {
      this.arr2=get.result;
    }

  },error=>{
    console.log(error);
    this.error=error.message;
  });
}


deleteUserId(id:any){  //for API
  this.apiService.deleteUser(id).subscribe((get:any)=>{
    console.log(get);
    if(get.httpStatus==200){
      this.getAllUser();
    }
  })

}

editUser(id:any){
  this.isLoading=true   // isLoading is for Api loading GIF
  this.apiService.editUser(id).subscribe((get:any)=>{
    console.log(get);
this.isLoading=false;

    if(get){

        this.addForm.controls['ID'].setValue(get.id),   // here assigning ID = id for data binding as same as done in onSubmit()
         this.addForm.controls['NAME'].setValue(get.name),
         this.addForm.controls['EMAIL'].setValue(get.email),
         this.addForm.controls['OTP'].setValue(get.otp),

      this.addForm.patchValue(get)  //patchValue is for binding data to form
    }

  })

}



onSubmit(){  // for API
  this.ifShow=false;      // initially span is false =off /hide
  var email=this.addForm.controls['EMAIL'].value
  if(email==""  ){

    this.ifShow=true
  }else{
    this.ifShow=false
  }
  var name=this.addForm.controls['NAME'].value

  if(name==""){
    this.iffShow=true;
  }else{
    this.iffShow=false;
  }

  console.log(email,name);

if(this.addForm.valid && this.ifShow==false && this.iffShow==false) // id fields are empty api won't call

{

  var randNumber = Math.floor((Math.random() * 1000)+1000);  // TO generate 4 digit random number

    this.addForm.controls['OTP'].setValue(randNumber);

    if(this.addForm.controls['ID'].value == undefined || null){
      this.addForm.controls['ID'].setValue(0);
    }

  var obj={
    'Id':this.addForm.controls['ID'].value,   // for assigning ID = Id ;
    'Name':this.addForm.controls['NAME'].value,  //this is case sensentive so we should give the exact name in API
    'Email':this.addForm.controls['EMAIL'].value,
    'OTP':this.addForm.controls['OTP'].value,
  }


  this.apiService.saveUser(obj).subscribe((post:any)=>{  // to send data to API
    console.log(post);

    if(post.httpStatus==200){
      this.getAllUser();
      this.addForm.reset();  //reset() is for clear data in form after submit like that
    }


})
}

}

onKeydown(event: { key: any;}) {
  console.log(event);
  // if press any key in keyboard the span will activate for email
  if (event.key) {
    this.ifShow=false;
  }

}
onKeyUp(event: { key: any; }) { // if press any key in keyboard the span will activate for name
  if (event.key) {
    this.iffShow=false;
  }

}



// if want we can use this method


// this method is for session timeout
timeOut(){
  setTimeout(()=>{
    this.route.navigate([''])
  },60000)
}

}


