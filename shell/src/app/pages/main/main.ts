import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [RouterLink, MatCardModule, MatIconModule, MatButtonModule],
  selector: 'app-main',
  styleUrl: './main.scss',
  templateUrl: './main.html',
})
export class Main {
  protected readonly microfrontends = [
    {
      path: '/mfe1',
      title: 'MFE1',
      icon: 'widgets',
      description: 'People list (sorting, pagination, search) and cross-app messaging demo.',
    },
    {
      path: '/mfe2',
      title: 'MFE2',
      icon: 'extension',
      description: 'Example remote microfrontend served independently of the shell.',
    },
  ];
}
