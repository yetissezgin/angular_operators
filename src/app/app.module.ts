import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgifandforComponent } from './ngifandfor/ngifandfor.component';
import {MatButtonModule} from "@angular/material/button";
import { ParentComponent } from './passingdata/betweencomponents/parent/parent.component';
import { ChildComponent } from './passingdata/betweencomponents/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    NgifandforComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
