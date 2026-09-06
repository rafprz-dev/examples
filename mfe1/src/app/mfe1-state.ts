import { signal } from '@angular/core';

/**
 * Shared signal exposed via Native Federation so the shell (or any other
 * remote) can read live updates coming from mfe1 without prop drilling.
 * Native Federation caches this module after the first load, so every
 * consumer gets the exact same signal instance.
 */
export const mfe1 = signal('Hello from mfe1!');
