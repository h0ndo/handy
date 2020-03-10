import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CallModule } from './call/call.module';
import { SettingsModule } from './settings/settings.module';
import { ServiceModule } from './service/service.module';
import { UsermanualModule } from './usermanual/usermanual.module';
import { HandyModule } from './handy/handy.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    CallModule,
    SettingsModule,
    ServiceModule,
    UsermanualModule,
    HandyModule,
    WhatsappModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
