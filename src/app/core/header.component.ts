import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="header-container">

      <!-- LEFT SECTION -->
      <div class="left-section">

        <!-- Burger Icon -->
        <div class="burger">
          <i class="bi bi-list"></i>
        </div>

        <!-- Search -->
        <div class="search-wrapper">
          <i class="bi bi-search search-icon"></i>
          <input 
            type="text"
            placeholder="Search"
            class="search-input"
          />
        </div>

      </div>

      <!-- RIGHT SECTION -->
      <div class="right-section">

        <!-- Notification -->
        <div class="icon-wrapper">
          <img src="assets/images/Icon-bell.png" alt="bell" />
          <span class="notification-dot"></span>
        </div>

        <!-- Language -->
        <div class="language">
          <img src="https://flagcdn.com/w40/gb.png" class="flag" />
          <span>English</span>
          <img src="../../assets/images/Drop Down.png" class="arrow" />
        </div>

        <!-- Profile -->
        <div class="profile">
          <img 
            src="https://i.pravatar.cc/40"
            class="avatar"
          />
          <div class="profile-info">
            <span class="name">Mori Roy</span>
            <span class="role">Admin</span>
          </div>
          <img src="../../assets/images/More.png" class="arrow" />
        </div>

      </div>

    </nav>
  `,
  styles: [`
    .header-container {
      height: 70px;
      background: #ffffff;
      border-bottom: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30px;
    }

    /* LEFT */
    .left-section {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .burger img {
      width: 22px;
      cursor: pointer;
    }

    /* SEARCH */
    .search-wrapper {
      position: relative;
      width: 350px;
    }

    .search-input {
      width: 100%;
      height: 40px;
      border-radius: 25px;
      border: none;
      background: #f5f6fa;
      padding-left: 40px;
      font-size: 14px;
      outline: none;
    }

    .search-input:focus {
      background: #eef1f7;
    }

    .search-icon {
      position: absolute;
      top: 50%;
      left: 15px;
      transform: translateY(-50%);
      width: 16px;
      opacity: 0.6;
    }

    /* RIGHT */
    .right-section {
      display: flex;
      align-items: center;
      gap: 30px;
    }

    .icon-wrapper {
      position: relative;
      cursor: pointer;
    }

    .icon-wrapper img {
      width: 22px;
    }

    .notification-dot {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 8px;
      height: 8px;
      background: #ff3b3b;
      border-radius: 50%;
    }

    /* LANGUAGE */
    .language {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      font-size: 14px;
    }

    .flag {
      width: 28px;
      height: 20px;
      border-radius: 3px;
    }

    .arrow {
      opacity: 0.6;
    }

    /* PROFILE */
    .profile {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
    }

    .avatar {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      object-fit: cover;
    }

    .profile-info {
      display: flex;
      flex-direction: column;
      line-height: 1.2;
    }

    .name {
      font-size: 14px;
      font-weight: 600;
    }

    .role {
      font-size: 12px;
      color: #999;
    }
  `]
})
export class HeaderComponent {}
