import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { CommonModule } from '@angular/common';
import { LibTestTinSpaModule } from 'lib-test-tin-spa';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LibTestTinSpaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
