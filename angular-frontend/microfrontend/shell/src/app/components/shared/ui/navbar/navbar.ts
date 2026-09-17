import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatTabsModule, MatIconModule],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly links = [
    { path: '/main', label: 'Main', icon: 'home' },
    { path: '/mfe1', label: 'MFE1', icon: 'widgets' },
    { path: '/mfe2', label: 'MFE2', icon: 'extension' },
  ];
}
