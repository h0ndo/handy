import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { HandySizeComponent } from './handy-size/handy-size.component';
import { RingtoneComponent } from './ringtone/ringtone.component';
import { BackgroundComponent } from './background/background.component';


@NgModule({
  declarations: [HandySizeComponent, RingtoneComponent, BackgroundComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
