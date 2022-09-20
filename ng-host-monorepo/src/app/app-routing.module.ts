import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mfe01Component } from 'mfe01';
import { Mfe02Component } from 'mfe02';
import {
  startsWith,
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { NotFoundComponent } from './not-found/not-found.component';

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
  },
  {
    matcher: startsWith('remote03'),
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry: 'http://localhost:3400/remoteEntry.js',
      remoteName: 'remote03',
      exposedModule: './web-components',
      elementName: 'remote03-element'
    } as WebComponentWrapperOptions
  },
  {
    matcher: startsWith('angular3'),
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js',
      // remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'angular3',
      exposedModule: './web-components',
      elementName: 'angular3-element'
    } as WebComponentWrapperOptions
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      type: 'script',
      remoteEntry:
        'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './web-components',
      elementName: 'react-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
