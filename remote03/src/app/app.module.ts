import { FormComponent } from './shared/form/form.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { createCustomElement } from '@angular/elements';
import { DatagridComponent } from './shared/components/datagrid/datagrid.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('remote03-element', ce);
    customElements.define('remote03-datagrid-element', createCustomElement(DatagridComponent, { injector: this.injector }));
    customElements.define('remote03-form-element', createCustomElement(FormComponent, { injector: this.injector }));
  }
}
