import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./pages/people-list/people-list').then((m) => m.PeopleList),
  },
  {
    path: 'message',
    loadComponent: () => import('./pages/message-demo/message-demo').then((m) => m.MessageDemo),
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];
