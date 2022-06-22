import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterPageComponent } from './modules/register-page/register-page.component';
import { UserPageComponent } from './modules/user-page/user-page.component';
import { RoutingModule } from "./routing.module";
import {
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
