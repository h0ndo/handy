import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermanualRoutingModule } from './usermanual-routing.module';
import { HotKeysComponent } from './hot-keys/hot-keys.component';


@NgModule({
  declarations: [HotKeysComponent],
  imports: [
    CommonModule,
    UsermanualRoutingModule
  ]
})
export class UsermanualModule { }
