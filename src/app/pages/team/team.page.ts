import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="d-flex align-items-center justify-content-between mb-3">
      <h4 class="m-0">Team</h4>
      <a routerLink="/team/add" class="btn btn-primary">Add Member</a>
    </div>

    <div class="row g-3">
      <div class="col-md-3" *ngFor="let m of team">
        <div class="card p-3 text-center">
          <img [src]="m.avatar" class="rounded-circle mb-2" />
          <strong>{{ m.name }}</strong>
          <small>{{ m.role }}</small>
        </div>
      </div>
    </div>
  `
})
export class TeamPage {
  team = [
    { name: 'Jason', role: 'Admin', avatar: 'https://i.pravatar.cc/60?1' },
    { name: 'Jason', role: 'Admin', avatar: 'assets/images/teamImage.png'},
    { name: 'Jason', role: 'Admin', avatar: 'https://i.pravatar.cc/60?1' },
    { name: 'Jason', role: 'Admin', avatar: 'assets/images/teamImage.png'},
    { name: 'Jason', role: 'Admin', avatar: 'https://i.pravatar.cc/60?1' },
    { name: 'Jason', role: 'Admin', avatar: 'assets/images/teamImage.png'},
    { name: 'Jason', role: 'Admin', avatar: 'https://i.pravatar.cc/60?1' },
    { name: 'Jason', role: 'Admin', avatar: 'assets/images/teamImage.png'}
  ];
}
