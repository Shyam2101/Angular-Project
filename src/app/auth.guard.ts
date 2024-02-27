import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn:"root"

})


export class authGuard implements CanActivate{
  constructor(private route:Router) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    var userCredentials=localStorage.getItem('credentials')
    console.log(userCredentials);
    if(userCredentials != null || userCredentials!=undefined){
      return true;
    }
    else{

     this.route.navigate([''], {queryParams:{returnUrl:state.url}});
      console.log();

      return false;
    }




  }



  }

