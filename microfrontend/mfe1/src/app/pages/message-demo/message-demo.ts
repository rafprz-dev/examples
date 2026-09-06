import { Component } from '@angular/core';
import { mfe1 } from '../../mfe1-state';

@Component({
  imports: [],
  selector: 'app-message-demo',
  styleUrl: './message-demo.scss',
  templateUrl: './message-demo.html',
})
export class MessageDemo {
  // The message currently shared with the shell via the `mfe1` signal.
  protected readonly sharedMessage = mfe1;

  protected sendToShell(value: string): void {
    mfe1.set(value);
  }
}
