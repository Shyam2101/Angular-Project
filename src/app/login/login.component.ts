import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  userName: any;
  password: any;
  loginArray = [
    {
      'username': 'shyam',
      'password': '12345',
    },
    {
      'username':'guna',
      'password':'123',

    },{
      'username':'Aishwarya',
      'password':'123456',
    }

  ]


  constructor( private route: ActivatedRoute,
    private router: Router,) {


  }

  onSubmit() {

    // this.loginArray.forEach(ele=>{                                         // not applicable for multiple user
    //   if(ele.username ==this.userName && ele.password ==this.password){


    //     this.route.navigate(['app']);


    //   }
    //   else{
    //     alert('USERNAME and PASSWORD is INVALID')

    //   }


    // })

    var ele= this.loginArray.find(a=>a.username==this.userName && a.password==this.password);
    console.log(ele);
    if(ele ==undefined ){
      alert('USERNAME and PASSWORD is INVALID')
    }
    else{
      localStorage.setItem('credentials',JSON.stringify(ele));

     var  returnUrl =this.route.snapshot.queryParams['returnUrl'] || '/';

     if(returnUrl !='/'){

      this.router.navigateByUrl(returnUrl);
     }
     else{
      this.router.navigate(['edit'])


     }


    }



    }





      }








