import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventDetailsFormComponent } from './event-details-form/event-details-form.component';
import { FooterComponent } from './footer/footer.component';
import { Link1Component } from './link1/link1.component';
import { Link2Component } from './link2/link2.component';
import { Link3Component } from './link3/link3.component';
import { Link4Component } from './link4/link4.component';
import { Link5Component } from './link5/link5.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { FontControllerComponent } from './font-controller/font-controller.component';
import {NgArrayPipesModule} from "ngx-pipes";
import {NgxPrintModule} from 'ngx-print';
import { PrintpageComponent } from './printpage/printpage.component';


@NgModule({
  declarations: [
    AppComponent,
    EventDetailsFormComponent,
    FooterComponent,
    Link1Component,
    Link2Component,
    Link3Component,
    Link4Component,
    Link5Component,
    FontControllerComponent,
    PrintpageComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    NgArrayPipesModule,
    NgxPrintModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
