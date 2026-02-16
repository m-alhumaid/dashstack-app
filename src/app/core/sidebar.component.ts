import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="sidebar p-3">
      <div class="d-flex align-items-center gap-3 pb-4">
        <h5 class="logo m-0">
          <span class="text-primary fw-bold">Dash</span>Stack
        </h5>
      </div>
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
      <a routerLink="/favorites" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Favorites</a>
      <a routerLink="/orders" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Orders</a>
      <a routerLink="/team" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Team</a>
    </div>
  `
})
export class SidebarComponent {}
