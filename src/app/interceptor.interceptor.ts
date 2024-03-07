import { route } from './add/add.module';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(public route:Router) {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
  var cloned=request;
  let ok: string;
  var token='shyamTesttoken;'
    cloned = request.clone({ headers: request.headers.set("Authorization", "Bearer " + token) })


    return Observable.create((observer:any)=>{

      const subscription =next.handle(cloned).subscribe(event=>{
        if(event instanceof HttpResponse){
          observer.next(event)
        }
      },
      error=>{
        if(error.status==401){
          localStorage.clear();
          this.route.navigate([''])
        }
        observer.error(error);
      }
      )
    })
  }


}
