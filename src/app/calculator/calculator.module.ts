import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';
import { SubComponent } from './sub/sub.component';

export const routes:Routes=[
  {path:'',component:CalculatorComponent},
  {path:':id', component:SubComponent}

]

@NgModule({
  declarations: [
    CalculatorComponent,
    SubComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
  ]
})
export class CalculatorModule { }
