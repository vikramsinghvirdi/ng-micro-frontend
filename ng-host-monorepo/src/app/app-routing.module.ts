import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mfe01Component } from 'mfe01';
import { Mfe02Component } from 'mfe02';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/mfe01',
    pathMatch: 'full'
  },
  {
    path: 'mfe01',
    component: Mfe01Component
  },
  {
    path: 'mfe02',
    component: Mfe02Component
  },
  {
    path: 'remote01',
    loadChildren: () => import('remote01/Module').then(m => m.SharedModule)
  },
  {
    path: 'remote02',
    loadChildren: () => import('remote02/Module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
