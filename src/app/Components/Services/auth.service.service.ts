import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthServiceService {
  private isAdminLoggedIn = false;

  loginAsAdmin() {
    this.isAdminLoggedIn = true;
  }

  logout() {
    this.isAdminLoggedIn = false;
  }

  isAdmin(): boolean {
    return this.isAdminLoggedIn;
  }
}
