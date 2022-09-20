import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { Mfe01Component } from './mfe01.component';

@NgModule({
  declarations: [
    Mfe01Component
  ],
  imports: [
    BrowserAnimationsModule,
    ClarityModule,
    ClrIconModule
  ],
  exports: [
    Mfe01Component
  ]
})
export class Mfe01Module { }
