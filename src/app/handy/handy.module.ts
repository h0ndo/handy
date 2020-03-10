import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HandyRoutingModule } from './handy-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HandyRoutingModule
  ]
})
export class HandyModule { }