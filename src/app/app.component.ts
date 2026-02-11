import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './core/sidebar.component';
import { HeaderComponent } from './core/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  template: `
    <div class="d-flex">
      <app-sidebar></app-sidebar>
      <div class="flex-grow-1 content">
        <app-header></app-header>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {}
