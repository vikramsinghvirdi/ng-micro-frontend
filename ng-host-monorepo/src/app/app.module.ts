import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mfe01Module } from 'mfe01';
import { Mfe02Module } from 'mfe02';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    Mfe01Module,
    Mfe02Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
