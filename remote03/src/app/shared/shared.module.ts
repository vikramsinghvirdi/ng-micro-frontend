import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import { RouterModule } from '@angular/router';
import { ClarityModule, ClrFormsModule, ClrIconModule, ClrInputModule, ClrSelectModule } from '@clr/angular';
import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const SHARED_ROUTES: Routes = [
    {
      path: 'users',
      component: DatagridComponent
    },
    {
      path: 'form',
      component: FormComponent
    }
];

@NgModule({
  declarations: [
    DatagridComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SHARED_ROUTES),
    ClarityModule,
    ClrIconModule,
    ReactiveFormsModule,
    FormsModule,
    ClrInputModule,
    ClrFormsModule,
    ClrSelectModule
  ],
  exports: [
    DatagridComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
