import { ClrInputModule, ClrSelectModule, ClarityModule, ClrIconModule, ClrFormsModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { DatagridComponent } from './datagrid/datagrid.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DatagridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    ClrIconModule,
    ReactiveFormsModule,
    FormsModule,
    ClrInputModule,
    ClrFormsModule,
    ClrSelectModule
  ],
  exports: [
    FormComponent,
    DatagridComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents : [
    AppComponent
  ]
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
