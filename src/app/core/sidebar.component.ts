import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="sidebar p-3">
      <h5 class="mb-4">DashStack</h5>
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
      <a routerLink="/favorites" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Favorites</a>
      <a routerLink="/orders" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Orders</a>
      <a routerLink="/team" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Team</a>
    </div>
  `
})
export class SidebarComponent {}
