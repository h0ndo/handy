import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HandyRoutingModule } from './handy-routing.module';
import { HomeComponent } from './home/home.component';
import { BackComponent } from './back/back.component';
import { FrontComponent } from './front/front.component';


@NgModule({
  declarations: [HomeComponent, BackComponent, FrontComponent],
  imports: [
    CommonModule,
    HandyRoutingModule
  ]
})
export class HandyModule { }
