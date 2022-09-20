
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const SHARED_ROUTES: Routes = [
    {
      path: 'home',
      component: HomeComponent
    }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SHARED_ROUTES),
    ClarityModule,
    ClrIconModule
  ],
  exports: [
    HomeComponent
  ]
})
export class SharedModule { }
