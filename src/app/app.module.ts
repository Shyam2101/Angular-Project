import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact/contact.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InterceptorInterceptor } from './interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,


  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
