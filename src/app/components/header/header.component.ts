import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api-service.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private authService: AuthService, private router: Router, private apiService: ApiService){}


  logout() {
    this.authService.logout();
    console.log("User logged out");
    window.location.reload()
  }

  myProfile(){
    this.router.navigate(['/me']);
    
  }
  

}
