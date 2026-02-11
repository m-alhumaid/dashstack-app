import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h4 class="mb-4">Add Team Member</h4>
    <div class="card p-4 shadow-sm">

      <div class="text-center mb-4">
        <div class="avatar-circle mb-2">
          <img *ngIf="photo" [src]="photo" class="rounded-circle" alt="Avatar" />
          <img *ngIf="!photo" src="assets/images/cam-pic.png" class="camera-icon" alt="Camera Icon" />
        </div>
        <div class="text-primary mt-2" style="cursor:pointer;" (click)="fileInput.click()">Upload Photo</div>
        <input #fileInput type="file" (change)="onFileChange($event)" hidden />
      </div>

      <div class="row g-3">
        <div class="col-md-6">
          <label for="firstName" class="form-label">First Name</label>
          <input id="firstName" [(ngModel)]="firstName" class="form-control" placeholder="Enter your first name">
        </div>

        <div class="col-md-6">
          <label for="lastName" class="form-label">Last Name</label>
          <input id="lastName" [(ngModel)]="lastName" class="form-control" placeholder="Enter your last name">
        </div>

        <div class="col-md-6">
          <label for="email" class="form-label">Email</label>
          <input id="email" [(ngModel)]="email" type="email" class="form-control" placeholder="Enter your email">
        </div>

        <div class="col-md-6">
          <label for="phone" class="form-label">Phone Number</label>
          <input id="phone" [(ngModel)]="phone" type="tel" class="form-control" placeholder="Enter your phone number">
        </div>

        <div class="col-md-6">
          <label for="position" class="form-label">Position</label>
          <input id="position" [(ngModel)]="position" class="form-control" placeholder="CEO">
        </div>

        <div class="col-md-6">
          <label for="gender" class="form-label">Gender</label>
          <select id="gender" [(ngModel)]="gender" class="form-select">
            <option value="" disabled selected>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div class="text-center mt-4">
        <button class="btn btn-primary px-5" (click)="addMember()">Add Now</button>
      </div>

    </div>
  `,
  styles: [`
    .avatar-circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #f0f0f0;
      overflow: hidden;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .avatar-circle img {
      width: 100%;
      height: 100%;
      object-fit: none;
    }
    .camera-icon {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
    .form-control, .form-select {
      background-color: #f8f9fa;  
      height: 80px;                
      width: 100%;                 
      border-radius: 8px;          
      padding: 0 12px;             
      box-sizing: border-box;      
      font-size: 0.95rem;          
    }
    .row.g-3 > [class^="col-"] {
      margin-bottom: 12px; 
    }
  `]
})
export class AddMemberPage {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  photo: string | ArrayBuffer | null = null;
  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  position = '';
  gender = '';

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => this.photo = reader.result;
      reader.readAsDataURL(file);
    }
  }

  addMember() {
    console.log({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      position: this.position,
      gender: this.gender,
      photo: this.photo
    });
    alert('Member added! Check console for data.');
  }
}
