import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ContactComponent } from './contact/contact.component';
import { SubComponent } from './calculator/sub/sub.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {NotfoundComponent} from './notfound/notfound.component';
import { authGuard } from './auth.guard';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'',component:LoginComponent},

    {path:'calc',canActivate:[authGuard],loadChildren:()=>import('./calculator/calculator.module').then(s=>s.CalculatorModule)},
    {path:'contact',component:ContactComponent},
    {path:'sub',canActivate:[authGuard],component:SubComponent},
    {path:'home',component:HomeComponent},
    {path:'notfound',component:NotfoundComponent},
    // {path:'**',redirectTo:'notfound'},
    { path:'edit',canActivate:[authGuard],
    loadChildren:()=>import('./add/add.module').then(s=>s.AddModule)}

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
