import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  name=""
  email=""
  password=""

  constructor(private authService: AuthService, private router: Router){}

  register()
  {
    this.authService.register({name: this.name, email: this.email, password: this.password}).subscribe({
      next: (response)=>
      {
        this.authService.saveToken(response.access_token);
        this.router.navigate(['/dashboard']);

      },
      error: (err)=>  console.error(err)
    })
  }

}
