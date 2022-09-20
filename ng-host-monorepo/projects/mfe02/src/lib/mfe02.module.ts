import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { Mfe02Component } from './mfe02.component';

@NgModule({
  declarations: [
    Mfe02Component
  ],
  imports: [
    BrowserAnimationsModule,
    ClarityModule,
    ClrIconModule
  ],
  exports: [
    Mfe02Component
  ]
})
export class Mfe02Module { }
