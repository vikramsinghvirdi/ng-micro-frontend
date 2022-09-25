import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NgZone } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mfe01Module } from 'mfe01';
import { ClarityModule } from '@clr/angular';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    Mfe01Module,
    ModuleFederationToolsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  // Even if we just load Zone.js once, we get several Zone.js instances:
  // One for the shell and one per each Micro Frontend. To fix this problem we will
  // share one Zone.js instance. For this, the shell is grabbing the current NgZone instance
  // and puts it into the global namespace. All the Micro Frontends take it from there and reuse it when bootstrapping.
  constructor(private ngZone: NgZone) {
    (window as any).ngZone = this.ngZone;
  }
}
