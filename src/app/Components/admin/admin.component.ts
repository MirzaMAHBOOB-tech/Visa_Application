import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Services/auth.service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  admin = {
    email: '',
    password: ''
  };

  errorMessage = '';
  successMessage = '';

  constructor(private router: Router , private authService: AuthServiceService) {}

 login() {
    const fixedEmail = 'admin@abglobal.com';
    const fixedPassword = 'admin123';

    if (this.admin.email === fixedEmail && this.admin.password === fixedPassword) {
      this.successMessage = 'Login successful!';
      this.authService.loginAsAdmin();
      setTimeout(() => {
        this.router.navigate(['/messages']);
      }, 1000);
    } else {
      this.errorMessage = 'Please try again with correct email or password.';
    }
  }
}
