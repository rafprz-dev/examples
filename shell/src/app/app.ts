import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Navbar } from './components/shared/ui/navbar/navbar';

interface Mfe1State {
  mfe1: () => string;
}

@Component({
  imports: [RouterOutlet, Navbar],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('shell');

  // Holds the exposed `mfe1` signal once the remote module has loaded.
  protected mfe1State: Mfe1State | undefined;

  constructor() {
    loadRemoteModule({
      remoteName: 'mfe1',
      exposedModule: './State',
    }).then((m) => {
      this.mfe1State = m;
    });
  }
}
