import { Component } from '@angular/core';
import { Router  } from '@angular/router';
import { AuthServiceService } from '../Services/auth.service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private router: Router , public authService: AuthServiceService) {}
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
