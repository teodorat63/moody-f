import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements DoCheck {

  isLoggedIn: boolean

  constructor(private authService: AuthService, private router: Router, private apiService: ApiService){
    this.isLoggedIn = authService.isAuthenticated();
  }

  ngDoCheck(){
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    console.log("User logged out");
    window.location.reload()
  }

  myProfile(){
    this.router.navigate(['/me']);

  }

  home(){
    this.router.navigate(['/']);

  }
}
