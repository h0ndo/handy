import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CallModule } from './call/call.module';
import { SettingsModule } from './settings/settings.module';
import { ServiceModule } from './service/service.module';
import { UsermanualModule } from './usermanual/usermanual.module';
import { HandyModule } from './handy/handy.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { HomeComponent } from './handy/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CallModule,
    SettingsModule,
    ServiceModule,
    UsermanualModule,
    HandyModule,
    WhatsappModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
