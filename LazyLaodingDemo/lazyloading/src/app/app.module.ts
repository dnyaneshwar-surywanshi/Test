import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthguardService } from './authguard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule constructor called')
  }
 }
