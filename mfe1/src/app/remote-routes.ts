import { Routes } from '@angular/router';
import { App } from './app';
import { routes as childRoutes } from './app.routes';

/**
 * Routes exposed to host applications via Native Federation.
 *
 * Wraps mfe1's own routes as children of the `App` shell component, so that
 * when the host (e.g. the shell app) mounts this under a path segment
 * (e.g. `/mfe1`), the host's Router has matching entries for
 * `/mfe1/main` and `/mfe1/message` — otherwise App's internal
 * <router-outlet> would have nothing to render.
 *
 * App is imported statically (not via loadComponent) because app.ts is
 * also directly exposed as `./Component`. Native Federation collapses a
 * dynamic import of the same file into an internal `@nf-internal/*`
 * chunk reference, which isn't resolvable when only `./Routes` is loaded
 * by the host without `./Component`.
 */
export const remoteRoutes: Routes = [
  {
    path: '',
    component: App,
    children: childRoutes,
  },
];
