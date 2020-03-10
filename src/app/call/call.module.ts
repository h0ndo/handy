import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallRoutingModule } from './call-routing.module';
import { DirectCallComponent } from './direct-call/direct-call.component';
import { IncomingCallComponent } from './incoming-call/incoming-call.component';
import { OutgoingCallComponent } from './outgoing-call/outgoing-call.component';
import { ActiveCallComponent } from './active-call/active-call.component';


@NgModule({
  declarations: [DirectCallComponent, IncomingCallComponent, OutgoingCallComponent, ActiveCallComponent],
  imports: [
    CommonModule,
    CallRoutingModule
  ]
})
export class CallModule { }
