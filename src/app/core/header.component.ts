import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <div class="d-flex justify-content-between mb-4">
      <input class="form-control w-25" placeholder="Search..." />
      <strong>Admin</strong>
    </div>
  `
})
export class HeaderComponent {}
