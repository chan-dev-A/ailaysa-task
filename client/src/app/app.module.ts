import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './components/box/box.component';
import { BoxListComponent } from './components/box-list/box-list.component';
import {FlexModule} from "@angular/flex-layout";
import {ApiService} from "./services/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InterceptorService} from "./services/interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    BoxListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, {
    provide:HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true,

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
