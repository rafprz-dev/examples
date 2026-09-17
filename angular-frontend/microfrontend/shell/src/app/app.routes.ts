import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./pages/main/main').then((m) => m.Main),
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mfe1',
        exposedModule: './Routes',
      }).then((m) => m.remoteRoutes),
  },
  {
    path: 'mfe2',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'mfe2',
        exposedModule: './Component',
      }).then((m) => m.App),
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];
