import { routes } from './../calculator/calculator.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


export const route:Routes=[
  {path:'',component:AddComponent},
  {path:':id',component:EditComponent}
]



@NgModule({
  declarations: [
    AddComponent,
    EditComponent
  ],

  imports: [
    RouterModule.forChild(route),
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AddModule { }
