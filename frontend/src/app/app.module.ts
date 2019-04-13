import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { HomePageComponent } from './home-page/home-page.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { HomewearComponent } from './homewear/homewear.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { OffersComponent } from './offers/offers.component';
import { BestSellingComponent } from './best-selling/best-selling.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WomenComponent,
    MenComponent,
    KidsComponent,
    HomewearComponent,
    NewArrivalsComponent,
    OffersComponent,
    BestSellingComponent,
    SignupPageComponent,
    SubscribeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }