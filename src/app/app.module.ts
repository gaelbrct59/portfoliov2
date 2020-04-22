import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BackgroundContainerComponent } from './background-container/background-container.component';
import { PresentationComponent } from './background-container/presentation/presentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormationComponent } from './background-container/formation/formation.component';
import { ProjetsComponent } from './background-container/projets/projets.component';
import { ContactComponent } from './background-container/contact/contact.component';
import { FooterComponent } from './background-container/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BackgroundContainerComponent,
    PresentationComponent,
    FormationComponent,
    ProjetsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  constructor(){
  }
  ngOnInit(): void {

  }

}
