
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatagridComponent } from './datagrid/datagrid.component';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  { path: 'remote03/datagrid', component: DatagridComponent },
  { path: 'remote03/form', component: FormComponent },

  // To prevent issues when routing to other micro frontends
  // a catch-all route should be defined
  { path: '**', component: EmptyComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
