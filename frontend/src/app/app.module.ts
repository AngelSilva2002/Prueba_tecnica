import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlatosComponent } from './components/platos/platos.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {  FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    PlatosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
