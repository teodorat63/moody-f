import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  errorMessage: string | null = null;

  login() {
    this.errorMessage = null;  
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (response) => {
        this.authService.saveToken(response.access_token);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        if (err.status === 400) {
          this.errorMessage = "An unexpected error occurred. Please try again later.";
        } else {
          this.errorMessage = "Invalid email or password. Please try again.";
        }
        console.error(err);  
      }
    });
  }

}
